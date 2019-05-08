<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="../css/style.css"/>
    			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
			</head>
			<body>
				<div class="page-wrap" id="page-wrap">

			        <!--HEADER-->
			        <header>
			            <nav class="navbar"> 
			                <ul>
			                    <a href="../index.html"><li>Home</li></a>
			                    <a href="questions.xml"><li>F.A.Q</li></a>
			                    <a href="../html/upload.html"><li>Upload</li></a>
			                    <a href="../html/browse.html"><li>Browse Patterns</li></a>
			                </ul>
			            </nav>
			            <div class="logo"><a href="../index.html">3DP</a></div>
			        </header>

			        <!--CONTENT-->
			        <section>
			            <h2>Frequently Asked Questions<i class="fas fa-question"></i></h2>
			            <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Llgko_GpXbI"></iframe></p>
			        </section>

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

					<!--FOOTER-->
			        <footer>
			            <div class="footer" id="footer">
			                <ul>
			                    <a href="../index.html"><li>Home</li></a>
			                    <a href="questions.xml"><li>F.A.Q</li></a>
			                    <a href="../html/contact.html"><li>Contact</li></a>
			                </ul>
			            </div>
			        </footer>
          
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
