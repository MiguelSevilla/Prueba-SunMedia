target = document.getElementById('sunmedia');
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');
/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
onInsertVideoWhenTargetIsVisible(target, videoElm);

compatibilidad();


function createVideoElement(video){
    iframe = document.createElement('video')
    iframeSource = document.createElement('source')

    //Si queremos que el usuario pueda manejar el video descomentar esta linea
    //iframe.setAttribute('controls', '')

    iframeSource.setAttribute('src', video)

    iframe.innerHTML = ''
    iframe.appendChild(iframeSource)

    return iframe;

}

function onInsertVideoWhenTargetIsVisible(target, videoElm){

    if(target != undefined){
        target.innerHTML = ''
        target.appendChild(iframe)
        if(videoElm != undefined){
            //Hay que mutear al video para que podamos usar la funcion play
            videoElm.muted = true;
            videoElm.play()
        }
    }

    //Añadimos el evento que lanza la funcion para eliminar el obajeto de video cuando acabe
    videoElm.addEventListener('ended',eliminarVideo,false);
    function eliminarVideo(e) {
        videoElm.remove()
    }

}
