you can demonstrate the skills from class and that you've extended those skills to be able to do this, I feel comfortable raising your grade.  This task is not easy, but the exercise should be valuable to you.
You will need to make two html pages - they will have identical headers and navigations (except for any <title> and <h1>)
The contents of the index.html are shown in this graphic.  Build a page that looks and works similarly, in particular:
There is a hamburger menu button (and it must be a <button>) that is only visible at the smaller viewport (below 40rem).  This button toggles the visible main menu as a dropdown.  At larger screen widths, this button is not visible  and the menu is shown as an always visible horizontal menu.  (there must be only one menu in your HTML that shows differently due to CSS, not two similar HTML menus where hide one and show the other)
When the page scrolls, the logo and title scroll off the screen, but the navigation remains
You should have an aria-expanded attribute on the menu button that is "false" or "true". 
You must have a "Log In" button that looks like a link.  This button opens a <dialog> modal window with a form.
This login form has two fields as seen in the image.  They validate on an input event or submit event on the form.  Both fields are required and will complain if they are empty.  Putting in "dog" as the username reveals a sarcastic validation message.  If there are any of these errors, the "Login" button will not submit the form.
The second html I do not have image for.  You can provide whatever content you like, as long as it involves some styling different than the index.html file.  I'll be looking for:
You have one CSS file for features the two files have in common that each HTML file will load, and then a separate CSS file for anything specific to each page.  (so 2 HTML pages = 3 CSS files)  Both pages should load the same single JS file as we have no JS unique to either page.
The colors used are white, #C0FFEE, skyblue, and dodgerblue.  The font is system-ui or sans-serif.  I'll attach the icon image (from google material icons) for the hamburger menu.  The logo image is 100x100.
To address previous issues, you'll want to make sure:
Your CSS is in CSS files
You use a <dialog> for your modal
You do not set a style attribute or use a style property of a DOM node
Be sure to start from the material from class.
Because of the difficulty and because I want to make sure you are able to keep up with React material, you have until 11:59pm Nov 14 to send this to me.  (Don't bother the TAs with this, though they'll know you've gotten this assignment)
and the modal backdrop is black with 0.6 opacity.You don't have to have the exact text: I want enough content that it has to scroll, beyond that you can put in whatever text you like and style as you see fit.
