window.addEventListener('load', (e) => {
    e.preventDefault();
    var theme = {
        dark: false
    }

    document.querySelector('.theme-switch').addEventListener('click', function (e) {
        e.preventDefault();
        toggle_mode();
    })

    function toggle_mode() {

        theme.dark = !theme.dark;

        Array.from(document.querySelectorAll('svg')).forEach(function(svg) {
            svg.style.fill = return_val('#fafafa', '#121212');
        });

        Array.from(document.querySelectorAll('path.path-theme')).forEach(function(svg, i) {
            if (i%2 == 0) {
                svg.style.fill = return_val('#fafafa', '#121212');
            }
        });

        let common_selectors = ["body", "#header"];
        common_selectors.forEach((selector) => {
            let obj = document.querySelector(selector);
            let styles = {
                background: return_val('#121212', '#fafafa'),
                color: return_val('#fafafa', '#121212')
            }
            Object.assign(obj.style, styles);
        })

        obj = document.querySelector(".card");
        styles = {
            background: return_val('#121212', '#fafafa'),
            color: return_val('#fafafa', '#121212'),
            border: return_val('1px solid #10aa50', '1px solid #fafafa'),
        }
        Object.assign(obj.style, styles);
        
        obj = document.querySelector(".theme-switch");
        styles = {
            background: return_val('#fafafa', '#121212'),
            color: return_val('#121212', '#fafafa')
        }
        Object.assign(obj.style, styles);
        obj = document.querySelector(".switch");
        styles = {
            background: return_val('#121212', '#fafafa'),
            left: return_val('unset', '4px'),
            right: return_val('4px', 'unset')
        }
        Object.assign(obj.style, styles);

    }

    function return_val(dark, light) {
        if (theme.dark) {
            return dark;
        }
        return light;
    }
    
});
