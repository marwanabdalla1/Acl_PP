// I can make in this list another component that will show the subtitles, we will have in it a hook for showing the rest of the code, but it should be in that subtitle component

// We can also make this component have buttons that onclick sets the hook in the outercourse view page with the video or exercise component pressed 



fe also haga esmaha split el wad estakhdemha fel notes app fe sramble ashan yesaghar w yekabar el diff maben el list w el editor




We can map the subtitiles array and then make a new array of false boolean,
when the button is pressed it changes to true 

and then we show the div by getting the element of that specific object in the array and check if its true

i can do it bel div key el beythat ba3d mat3mel el map

I can make that array with a useffect with no dependencies, that way i will make it only once when the component first renders






The Course View Page will have acess to everything 

I will have this drawer which will have acess to the subtitles

it will map on each subtitle and there will be a subtitle component 

in that subtitle component it will have access to functions passed from the all the way to the course page view 

In the sidebar, i don't care about the array of subtitles if the click more is clicked or not so i don't have to pass that to the course page
I will make a state in for each item component that is local to that item only



DONE !!! bravo 




I could make nested routes going forward





After initally logging in we can use some inspiration from the get user

a function that will return the role


We will make a usestate with the role saved in local storage or something 

and conditionally render components based that state