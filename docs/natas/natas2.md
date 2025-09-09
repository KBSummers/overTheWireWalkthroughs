# Natas 2
## Goal
Understand the filestructure of sites/pages and how we utilize information to traverse to different areas.

## Walkthrough
When we visit the page for the second level https://natas2.natas.labs.overthewire.org, it tells us that "there is nothing on this page". When we inspect the page, we can see that there is an image hosted there whose path is at /files/pixel.png 
![natas 2 inspect](../docs/images/natas2_0.png)
We can visit the pixel, but wont find anything useful ont he page. We can notice that its in a directory called `files` though, so lets visit https://natas2.natas.labs.overthewire.org 
![natas 2 files](../docs/images/natas2_1.png)
We can see that we have access to a users.txt file the the password to the next level
![natas 2 files](../docs/images/natas2_2.png)


## Key Takeaways
Dont allow users to traverse to areas of your web server that are unauthorized to them.

## Password
### To get to This Level
<div class="blurred-text">
TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI
</div>
### To get to Next Level
<div class="blurred-text">
3gqisGdR0pjm6tpkDKdIWO2hSvchLeYH
</div>



