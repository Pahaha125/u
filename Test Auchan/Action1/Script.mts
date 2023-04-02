'If True Then
'	Browser("Auchan. Promos, infos_2").Page("Auchan. Promos, infos").WebEdit("text").Set DataTable(1,1)
'Else
'	Browser("Auchan. Promos, infos_2").Page("Auchan. Promos, infos").WebEdit("text").Set "tomate"
'End If
MyFunction @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Auchan. Promos, infos_2").Page("Auchan. Promos, infos").WebButton("Lancer la recherche").Click @@ script infofile_;_ZIP::ssf9.xml_;_

'Browser("Auchan. Promos, infos_2").Page("Laits pas cher - Auchan.fr").WebElement("Laits").Check CheckPoint("Laits") @@ script infofile_;_ZIP::ssf10.xml_;_


Browser("Votre recherche tomate").Page("Votre recherche tomate").WebElement("Votre recherche : tomate").Check CheckPoint("Votre recherche : tomate") @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Votre recherche tomate").Page("Votre recherche tomate").Image("AUCHAN CULTIVONS LE BON").Check CheckPoint("AUCHAN CULTIVONS LE BON Tomates cerises rondes en grappes 300g_2") @@ script infofile_;_ZIP::ssf14.xml_;_
