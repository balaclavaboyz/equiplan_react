import os
from posixpath import splitext
import shutil
path=r'./src/Components/pages/imoveis/'
list_path=[]

for root,dirs,files in os.walk(path):
    for file in files:
        list_path.append(os.path.join(root,file))
for name in list_path:
    print(name)

list_available=[]

# listar todos os imoveis
for root, dirs, files in os.walk(r'./src/Components/pages/imoveis/'):
    for filename in files:
        list_available.append(filename)
j=0 
for i in list_available:
    print(j,i)
    j=j+1

escolha=int(input('Escolha o numero do imovel: '))
while(True):
    if escolha>=0 and escolha<=j-1:
        # ok
        file_to_delete_path=list_path[escolha]
        if os.path.isfile(file_to_delete_path):
            os.remove(file_to_delete_path)
            print('foi deletado a pagina do imovel: ',list_available[escolha])
        else:
            print('o arquivo %s para deletar nao existe'%file_to_delete_path)

        print('deletando fotos')

        if os.path.isdir('./src/assets/imoveis'+  splitext(list_available[escolha])[0]):
            shutil.rmtree('./src/assets/imoveis'+  splitext(list_available[escolha])[0])
        else:
            print('arquivos de fotos nao existem')
        
        list_to_delete_in_indexjs=[]
        list_to_delete_in_indexjs.append(list_available[escolha])
        infile='./src/App.js'
        outfile='./src/App.js'
        with open(infile) as fin, open(outfile, "w+") as fout:
            for line in fin:
                for word in list_to_delete_in_indexjs:
                    line = line.replace(word, "")
                fout.write(line)
        exit()
    else:
        escolha=int(input('Escolha o numero do imovel, denovo: '))