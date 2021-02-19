import './ScrollBar.css';

const ScrollBar = () => {
    window.addEventListener('scroll', () => {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
    
        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        document.getElementsByClassName('ScrollBar')[0].style.width = percent + "%";
    });

    return(
        <div className="ScrollBar"></div>
    )
}

export default ScrollBar;