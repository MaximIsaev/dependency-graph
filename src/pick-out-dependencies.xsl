<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>
	<xsl:template match="/packJSStructure">
		"use strict";
		window.links = [
			<xsl:apply-templates select="//dependency"/>
		]
	</xsl:template>
	
	<xsl:template match="//dependency">
		{source: "<xsl:value-of select="../../id"/>", target: "<xsl:value-of select="."/>"},
	</xsl:template>
</xsl:stylesheet>