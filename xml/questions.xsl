<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="css/style.css"/>
			</head>
			<body>
				<div class="page-wrap" id="page-wrap">
					
					<div class="headings" id="headings">
						<ol>
						  <p class="headingtitle">F.A.Q</p>
							<xsl:for-each select="questions/question">
								<li>
									<a href="#{position()}" target="_parent">
										<xsl:value-of select="h2"/>
									</a>
								</li>
							</xsl:for-each>
							<li>
								<a href="questions.xml">Back to Top</a>
							</li>
							<li>
							  <a href="../html/questions.html">Return</a>
							</li>
						</ol>
					</div>
					<div class="faqcontent" id="faqcontent">
						<div class="articles" id="articles">
							<xsl:for-each select="questions/question">
								<div class="article" id="article">
									<h2 id="{position()}">
										<xsl:value-of select="h2"/>
									</h2>
									<xsl:for-each select="answer/p">
										<p>
											<xsl:value-of select="."/>
										</p>
									</xsl:for-each>
								</div>
							</xsl:for-each>
						</div>
					</div>
          
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
