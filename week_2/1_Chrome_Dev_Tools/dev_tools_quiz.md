#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  The Elements tab supports this by allowing you to edit the HTML in the left half of the tab and the CSS stylesheet in the right. It loads the changes to the page in real time. 
  * Javascript Debugging
   This can be done in the Console where one can type in commands and see them completed.
  * Performance Optimization 
   This can be done in the network tab. Individual processes can be analyzed by clicking on them in the name tab.

* What's the quick key for your OS to spawn the Dev Tools inspector?
 ALT + Command + I
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
   The current background color for the page is #0b0f11
  * Tweak the background color to white.
  Did it
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  Did it.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  Did it.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
 http://i.imgur.com/Zi1Leim.png  
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
http://i.imgur.com/Zi1Leim.png
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
 The text cannot be tweaked at all, as it is a preloaded image. The image is being loaded as a background. Images cannot be so easily edited by the DevTools.
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  The largest image is the Stadium image. It is 291kb.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  This information can be easily accessed via the Network tab on DevTools. The URL is http://www.ticketswizard.com/Images/Catalog/ad724279-bc48-4560-8b68-af9e87202afa_Large.png
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
The lowest hanging fruit are the image compression types. Optimizing the image sizes would greatly improve the website performance.
