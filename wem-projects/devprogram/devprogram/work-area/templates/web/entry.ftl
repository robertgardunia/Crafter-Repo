<#include "/templates/system/common/cstudio-support.ftl" />
<#include "/templates/web/navigation/navigation.ftl" />

<html>
    <head>
		<#assign headerConfigTemplates = model.headerConfigTemplate.item />
		<#list headerConfigTemplates as headerConfigTemplate>
			<#assign templateItem = siteItemService.getSiteItem(headerConfigTemplate.key) />
			<#include templateItem.templatePath!'' />
		</#list>      
		<@ice id="headerConfigTemplate" />
    </head>

	<body>
		<div id="content-area">     
			<#assign headerCommonTemplates = model.headerCommonTemplate.item />
			<#list headerCommonTemplates as headerCommonTemplate>
				<#assign templateItem = siteItemService.getSiteItem(headerCommonTemplate.key) />
				<#include templateItem.templatePath!'' />
			</#list>      
			<@ice id="headerCommonTemplate" />

			<#assign headerTitleTemplates = model.headerTitleTemplate.item />
			<#list headerTitleTemplates as headerTitleTemplate>
				<#assign templateItem = siteItemService.getSiteItem(headerTitleTemplate.key) />
				<#include templateItem.templatePath!'' />
			</#list>      
			<@ice id="headerTitleTemplate" />		
		</div>

		<footer>
			<#assign footerCommonTemplates = model.footerCommonTemplate.item />
			<#list footerCommonTemplates as footerCommonTemplate>
				<#assign templateItem = siteItemService.getSiteItem(footerCommonTemplate.key) />
				<#include templateItem.templatePath!'' />
			</#list>      
			<@ice id="footerCommonTemplate" />
		</footer>

		<@cstudioOverlaySupport/>   
	</body>
</html>