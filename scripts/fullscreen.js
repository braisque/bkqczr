function toggleFullscreen()
{
    let container = document.getElementById('game-container');

    if (!document.fullscreenElement)
    {
        container.requestFullscreen()
    }
    else
    {
        document.exitFullscreen();
    }
}