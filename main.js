nose_x = 0;
nose_y = 0;

function preload()
{
    clound = loadImage('https://i.postimg.cc/Gh1LnNmS/l1.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelReady);
    poseNet.on('pose',getPoses);
}
function draw()
{
 image(video,0,0,300,300);
 image(clound,nose_x,nose_y+10,30,30);
}
function save_it()
{
    save('myFilterImage.png');
}
function modelReady()
{
    console.log("Ready");
}
function getPoses(results)
{
    if(results.length > 0)
    {
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        console.log("x" + nose_x);
        console.log("y" + nose_y);
    }
}