# FhotoFinal Assignment

###Author: Paul Harvey & Anna Ioudovskaya (harv0116 & ioud0001)

**Description:** The app has two screens with tabs to navigate between them:

1. A "Grid/List View" screen of all the thumbnails previously saved on that device. Each thumbnail needs to have a delete button below it. Tapping the delete button removes the image from the remote database as well as the interface. There needs to be a confirmation dialog before actually doing the AJAX call to delete an image. Tapping the thumbnail will load and show the full sized image in a modal display. ALL THUMBNAILS SHOULD BE LANDSCAPE ORIENTATION and 180PX WIDE.

2. A "Take Photo" screen that lets the user take a photo with the tablet, add text to either the top or bottom of the image, and save the image and the thumbnail to the remote database. Tapping the "Take Photo" tab will bring up the native camera interface. Taking a picture will return to the app and display the returned image on an HTML Canvas. The screen will also have a) A text input maxlength 30, b) a pair of radio buttons to let the user pick top or bottom placement for the text, c) a button to set the text on the image, d) a button to save the full-sized image and a thumbnail version of the image to the remote server. Each time you tap on the Take Photo tab it will call on the native camera interface and replace whatever image is on the Canvas. ALL LARGE IMAGES SHOULD BE LANDSCAPE ORIENTATION. 
