﻿<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">   
   <meta name="Generator" content="Alfresco Repository">
   <meta name="layoutengine" content="MSHTML">
   <style type="text/css">
      body {
         background-color:#FFFFFF;
         color:#000000;
         font-family:Verdana,Arial,sans-serif;
         font-size:11px;
      }
      * {
         font-family:Verdana,Arial,sans-serif;
         font-size:11px;
      }
      h1 {
         text-align:left;
         font-size:15px;
      }
      h2 {
         text-align:left;
         font-size:13px;
         margin: 17px;
         text-decoration:underline;
      }
      table.links td, table.description td {
         border-bottom:1px dotted #555555;
         padding:5px;
      }
      table.description, table.links {
         border:0;
         border-collapse:collapse;
         width:auto;
         margin:7px 20px 7px 20px;
      }
   </style>
</head>
<body>
<hr>
<h1> Documento (nome):   ${document.name} </h1>
<hr>
<h2> Metadati </h2>
<table class="description">
   <#if document.properties.title?exists>
                     <tr><td valign="top">Titolo:</td><td>${document.properties.title}</td></tr>
   <#else>
                     <tr><td valign="top">Titolo:</td><td>&nbsp;</td></tr>
   </#if>
   <#if document.properties.description?exists>
                     <tr><td valign="top">Descrizione:</td><td>${document.properties.description}</td></tr>
   <#else>
                     <tr><td valign="top">Descrizione:</td><td>&nbsp;</td></tr>
   </#if>
                     <tr><td>Autore:</td><td>${document.properties.creator}</td></tr>
                     <tr><td>Data di creazione:</td><td>${document.properties.created?datetime}</td></tr>
                     <tr><td>Modificatore:</td><td>${document.properties.modifier}</td></tr>
                     <tr><td>Data di modifica:</td><td>${document.properties.modified?datetime}</td></tr>
                     <tr><td>Dimensioni:</td><td>${document.size / 1024} Kb</td></tr>
</table>
<br>
<h2> Collegamenti del contenuto </h2>
<table class="links">
   <tr>
   <td>Cartella del contenuto:</td><td><a href="${contextUrl}/navigate/browse${document.parent.webdavUrl}">${contextUrl}/navigate/browse${document.parent.webdavUrl}</a></td>
   </tr>
   <tr>
   <td>URL del contenuto</td><td><a href="${contextUrl}${document.url}">${contextUrl}${document.url}</a></td>
   </tr>
   <tr>
   <td>URL di download:</td><td><a href="${contextUrl}${document.downloadUrl}">${contextUrl}${document.downloadUrl}</a></td>
   </tr>
   <tr>
   <td>URL WebDAV:</td><td><a href="${contextUrl}${document.webdavUrl}">${contextUrl}${document.webdavUrl}</a></td>
   </tr>
</table>

</body>
</html>
