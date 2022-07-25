import shutil
import subprocess
import requests


def give_only_ref():
    import pandas
    import codecs
    import os
    import re
    import zipfile

    if os.path.getsize('temp') == 0:
        # list all zip files in zip_entrada folder
        list_zip_dir=[]
        list_zip_files=[]
        for path in os.listdir('./zip_entrada/'):
            if os.path.isfile(os.path.join('./zip_entrada/',path)):
                list_zip_dir.append(path)
        for i in list_zip_dir:
            if re.search(r'zip$',i):
                list_zip_files.append(i)
        # ask user which zip to use
        j=0
        name_of_zipfile=''
        while(True):
            for i in list_zip_files:
                print(j,i)
                j=j+1
            escolha=int(input('Escolha o numero do zip: '))
            if escolha >=0 and escolha <=j-1:
                name_of_zipfile=list_zip_files[escolha]
                break
            else:
                escolha=int(input('Escolha o arquivo zip denovo: '))
        # unzip file choosen
        print('limpando o temp')
        shutil.rmtree('./zip_entrada/temp')
        os.makedirs('./zip_entrada/temp')
        print('extraindo')
        with zipfile.ZipFile('./zip_entrada/'+name_of_zipfile,'r') as f:
            f.extractall('./zip_entrada/temp')
            print('extraido os arquivo no dir temp')
        # move zip file to archive
        print('movendo o arquivo'+name_of_zipfile+' para a pasta zip_guardados')
        os.rename('./zip_entrada/'+name_of_zipfile,'./zip_guardados/'+name_of_zipfile)
        print('movido')

        # setting the csv as the main file to be used
        nome_arquivo_csv=name_of_zipfile[:-4]+'.csv'
        # list_local_files=[]
        # list_imoveis_only_file=[]
        # for path in os.listdir('./'):
        #     if os.path.isfile(os.path.join('./',path)):
        #         list_local_files.append(path)
        # for i in list_local_files:
        #     if re.search(r'^imovel',i):
        #         list_imoveis_only_file.append(i)
        # j=0
        # while(True):
        #     for i in list_imoveis_only_file:
        #         print(j,i)
        #         j=j+1
        #     escolha=int(input('Escolha o numero do arquivo: '))
        #     if escolha >=0 and escolha <=j-1:
        #         nome_arquivo_csv=list_imoveis_only_file[escolha]
        #         break
        #     else:
        #         escolha=input('Escolha o arquivo csv: ')

        with open('temp','w') as f:
            f.write(nome_arquivo_csv)
    else:
        with open('temp','r') as f:
            nome_arquivo_csv = f.read()

    BLOCKSIZE = 1048576  # or some other, desired size in bytes
    with codecs.open('./zip_entrada/temp/'+nome_arquivo_csv, "r", "ISO-8859-1") as sourceFile:
        with codecs.open('temp.csv', "w", "utf-8") as targetFile:
            while True:
                contents = sourceFile.read(BLOCKSIZE)
                if not contents:
                    break
                targetFile.write(contents)

    csv = pandas.read_csv('temp.csv', encoding='utf-8', sep=';')
    return(csv)


def csv_to_page():
    import codecs
    import json
    import os
    googleapi=os.environ.get('googleapi') 

    csv = give_only_ref()

    ref = csv['Referência'].loc[csv.index[0]]
    titulo = csv['Título'].loc[csv.index[0]]
    endereco = csv['Endereço'].loc[csv.index[0]]
    finalidade = csv['Finalidade'].loc[csv.index[0]]
    valor_locacao = csv['Valor Locação'].loc[csv.index[0]]
    valor_venda = csv['Valor Venda'].loc[csv.index[0]]
    descricao = csv['Descrição'].loc[csv.index[0]]
    endereco_googlemaps = endereco.replace(" ", "%20")

    r=requests.get(f'https://maps.googleapis.com/maps/api/geocode/json?address={endereco}&key={googleapi}')
    jsonObject=json.loads(r.text)

    lat=(jsonObject['results'][0]['geometry']['location']['lat'])
    lng=(jsonObject['results'][0]['geometry']['location']['lng'])

    link_google_streets=f'http://maps.google.com/maps?q=&layer=c&cbll={lat},{lng}&cbp=11,0,0,0,0'

    file_path = './src/Components/pages/imoveis/' + ref + '.jsx'

    blob_of_text = ("import google_maps from \"../../../assets/flutuante/google_maps.png\";import { Navigation, Pagination, Scrollbar } from \"swiper\";import { Swiper, SwiperSlide } from \"swiper/react\";import \"swiper/css\";import \"swiper/css/navigation\";import \"swiper/css/pagination\";import \"swiper/css/scrollbar\";import React from \"react\";import InnerHTML from \"dangerously-set-html-content\";export default function "+ref+"() {function importAll(r) {let images = {};r.keys().forEach((item, index) => {images[item.replace(\"./\", \"\")] = r(item);});return images;}const imgs = importAll(require.context(`../../../assets/imoveis/"+ref+"`,false,/\.(png|jpe?g|svg|webp)$/));const googleMaps = `<div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe src=\"https://maps.google.com/maps?q="+endereco_googlemaps +"&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed\" id=\"gmap_canvas\" frameborder=\"0\" scrolling=\"no\" style=\"width: 100%; height: 400px;\"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:100%;}</style><a href=\"https://googlemapsiframegenerator.com\" style=\"display:none\">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:100%;}</style></div></div>`;return (<><div className=\"container\"><div className=\"\"><div className=\"\"><div className=\"\"><div className=\"swiper_container\"><Swiper modules={[Navigation, Pagination, Scrollbar]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>{Object.entries(imgs).map((t, k) => (<SwiperSlide> <div key={k[0]}className=\"swiper_slide\"> <img src={t[1]} alt=\"image do imovel\" /></div></SwiperSlide>))}</Swiper></div><div className=\"imoveis_desp\"><hr /><h1>"+titulo+"</h1><p>"+endereco+"</p><p>Finalidade: "+finalidade+"</p><p>Valor da Locação: "+valor_locacao+"</p><p>Valor da Venda: "+valor_venda+"</p><hr /><h2>Descrição</h2><p>"+descricao+"</p><hr /><InnerHTML className=\"center\" html={googleMaps}></InnerHTML></div></div></div></div></div><a href=\""+link_google_streets+"\"style={{position: \"fixed\",zIndex: 99,bottom: \"190px\",right: \"20px\",}}><img src={google_maps} /></a><p style={{backgroundColor: \"lightgrey\",borderRadius: \"5px\",padding: \"5px 5px\",position: \"fixed\",zIndex: 99,bottom: \"190px\",right: \"104px\",}}>Maps</p></>);}")

    with codecs.open(file_path, "w", "utf-8-sig") as temp:
        temp.write(blob_of_text)

    # opening a text file
    file1 = open('./src/app.js', "r")

    # read file content
    readfile = file1.read()

    # checking condition for string found or not
    if ref in readfile:
        print(ref, ' ja existe essa referencia no arquivo app.js\n')
    else:
        print(ref, ' nao existe, criando os imports e links\n')
        inputfile = open('./src/app.js', 'r').readlines()
        write_file = open('./src/app.js', 'w')
        for line in inputfile:
            write_file.write(line)
            if "import Imoveis from \"./Components/pages/Imoveis\";" in line:
                new_line = "import "+ref+" from \"./Components/pages/imoveis/"+ref+"\";"
                write_file.write(new_line + "\n")
                print('criado import para ' + ref)
            if "                        <Route path=\"imoveis\" element={<Imoveis />} />" in line:
                new_line = "                        <Route path=\"" + \
                    ref+"\" element={<"+ref+" />} />"
                write_file.write(new_line + "\n")
                print('criado link para '+ref)
        write_file.close()

    # closing a file
    file1.close()

    # adding link with ref in /src/components/pages/imoveis.jsx
    # opening a text file
    file1 = open('./src/Components/pages/Imoveis.jsx', "r",encoding='utf-8')

    # read file content
    readfile = file1.read()

    # checking condition for string found or not
    if ref in readfile:
        print(ref, ' ja existe esse link no arquivo de indice\n')
    else:
        print(ref, ' nao existe, criando link no arquivo de indice\n')
        inputfile = open('./src/Components/pages/Imoveis.jsx', 'r',encoding='utf-8').readlines()
        write_file = open('./src/Components/pages/Imoveis.jsx', 'w',encoding='utf-8')
        for line in inputfile:
            write_file.write(line)
            if "                        <span id=\"insertion_table\"></span>" in line:
                new_line = "<tr id=\""+ref+"\"><th><Link to=\"/"+ref+"\">"+ref+"</Link></th><th>"+titulo+"</th><th>"+finalidade+"</th><th>"+valor_locacao+"</th><th>"+valor_venda+"</th></tr>"
                write_file.write(new_line + "\n")
                print('Criado link no indice' + ref)
            # if "                <h1>Casas / Lojas Comerciais</h1>" in line:
            #     new_line = "                <div style={{display:'flex',gap:'1rem'}}><Link to=\"/"+ref+"\">"+ref+"</Link><p>"+titulo+"</p><p>Tipo: "+finalidade+"</p><p>Valor Locação: "+valor_locacao+"</p><p>Valor Venda: "+valor_venda+"</p></div>"
            #     write_file.write(new_line + "\n")
            #     print('Criado link no indice' + ref)
        write_file.close()

    

def make_qrcode():
    import qrcode
    csv = give_only_ref()
    ref = csv['Referência'].loc[csv.index[0]]

    img = qrcode.make('https://equiplan.com.br/'+ref)
    img.save('./QR CODE DOS IMOVEIS/'+ref+'.png')
    print('criado e salvo como '+ref+'.png\n')


def move_imgs():
    csv = give_only_ref()
    ref = csv['Referência'].loc[csv.index[0]]

    import glob
    import shutil
    import os
    import re

    src_folder = r"./zip_entrada/temp/"
    dst_folder = r"./src/assets/imoveis/"+ref+"/"

    # check if folder exists dest
    if not os.path.exists(dst_folder):
        os.makedirs(dst_folder)
        print('criado nova pasta: '+dst_folder)
    files=[]
    # Search files with .txt extension in source directory
    pattern = r"\.(png|jpe?g|svg|webp)$"
    # files = glob.glob(src_folder + pattern)
    local_files=os.scandir(src_folder)
    for i in local_files:
        match=re.search(pattern,i.name,re.IGNORECASE)
        if match:
            files.append(i.name)


    # resize imsg to 400x500 aspect-ratio
    images_to_resize=[]
    for path in os.listdir(src_folder):
        match=re.search(pattern,path)
        if match:
            images_to_resize.append(path)

    list_command_to_resize=[]
    # resizing and saving in the correct folder
    j=0
    ext=images_to_resize[0][-4:]
    for i in images_to_resize:
        list_command_to_resize.append(f"magick convert {src_folder}{i} -resize 400x500! ./src/assets/imoveis/{ref}/{j}{ext}")
        j=j+1

    # spawn parallel process
    procs=[subprocess.Popen(i) for i in list_command_to_resize]
    for p in procs:
        p.wait()
        print('processando imagem')

    # # moving resized files
    # for file in files:
    #     # extract file name form file path
    #     file_name = os.path.basename(file)
    #     shutil.move(src_folder+file, dst_folder + file_name)
    #     print('Moved: ', file)
    
    if not files:
        print('Nao existe nenhuma foto no diretorio e nada foi feito\n')


menu_options = {
    1: 'csv para pagina',
    2: 'criar qrcode, vai sobreescrever se o arquivo ja existir',
    3: 'mover as imgs(apenas as imgs JPG) para a pasta certo',
    4: 'Sair'
}

if __name__ == '__main__':
    with open('temp','w') as f:
        f.write('')
    csv_to_page()
    make_qrcode()
    move_imgs()
    exit()
