/*
==UserScript==
@name             Bye Bye Canvas Tutorial
@match            *.instructure.com/*
@author           paulickj
@version          1.1
@discription      The ONLY use for this is to stop the the new student Canvas tutorial.
@run-at document-start
==/UserScript==
*/

localStorage.setItem('canvas-tourpoints-shown-student', true)
