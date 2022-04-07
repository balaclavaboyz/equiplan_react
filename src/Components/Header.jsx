import React from "react";
import logo from '../assets/logo.png'
import {Helmet} from "react-helmet";

const Header = () => {
  
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Equiplan</title>
      <meta
        name="description"
        content="Criamos, Produzimos e Vendemos em Atacado. Loja em Bom Retiro, rua aimores 101. Site institucional da Milvest."
      />
      <meta
        name="keywords"
        content="Milvest, bomretiro, bom retiro, atacado, aimores, vestido, vestidos, blusa, calca, calça, saia, milvest, instagram, whatsapp, outono, inverno, 2021, catálogo, catalogo, moda, qualidade, roupa, rua aimores atacado, rua aimores, vestido rua aimores, vestido atacado"
      />
      <meta name="author" content="Peter Kim" />
      <link rel="icon" href={logo} type="image/icon type" width="128px"/>
    </Helmet>
  );
};

export default Header;
