function NasaImage(){
    $.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',function(data)
    {
        var imageUrl=data.url;
        $('#astro-image').attr('src',imageUrl);
        document.getElementById("#details").innerHTML =data.explanation;
    });
};
$('#image-button').click(NasaImage);