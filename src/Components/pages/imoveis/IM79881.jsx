import React from "react";import InnerHTML from "dangerously-set-html-content";export default function IM79881() {function importAll(r) {let images = {};r.keys().forEach((item, index) => {images[item.replace("./", "")] = r(item);});return images;}const imgs = importAll(require.context(`../../../assets/imoveis/IM79881`,false,/\.(png|jpe?g|svg|webp)$/));const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Rua%20Manuel%20de%20Carvalho,%2022%20-%20%20São%20Paulo%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 600px; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style></div></div>`;return (<><div className="container_imoveis_menu container"><div className="imoveis_context"><div className="imovelGaleria"><div className="imoveis_imgs">{Object.entries(imgs).map((t, k) => (<div key={k}><a href={t[1]} target="_blank" rel="noopener noreferrer"><img src={t[1]} alt="test" /></a></div>))}</div><div className="imoveis_desp"><hr /><h1>Casa Comercial em Piqueri com 350m²</h1><p>Rua Manuel de Carvalho, 22 -  São Paulo / SP Apt/Sala:  -  Bloco: - Andar: </p><p>Finalidade: Aluguel</p><p>Valor da Locação: R$ 12.500,00</p><p>Valor da Venda: R$ 0,00</p><hr /><h2>Descrição</h2><p>Ponto comercial entre a ponte do Piqueri e Shopping Tietê, 50m da Marginal Tietê.
Imóvel de esquina, para fins comercias, duas entradas de pedestres independente.
- Recepção com sala de espera;
- Sala de reunião;
- Sala Diretoria;
- Sala operacional;
- Sala operacional II;
- Almoxarifado;
- Copa;
- Cozinha;
- 04 banheiros;
- Quintal com churrasqueira;
- 04 vagas para autos;
- Ar condicionado;
- Mobiliado;
- Entrada com gaiola de segurança.

Anexo ao imóvel, pátio de 600m2 asfaltado, murado 

Rua Manoel de Carvalho, n. 22, esquina com Rua Miguel Teles, n. 3 - Bairro Piqueri

Locação imóvel mais pátio
IPTU:.R$1.600,00 p/mês</p><hr /><InnerHTML className="center" html={googleMaps}></InnerHTML></div></div></div></div></>);}