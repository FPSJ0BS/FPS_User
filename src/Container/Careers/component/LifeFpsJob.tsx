import { AppConst } from "@/Enum/AppConst";


const LifeFpsJob = () => {
  return (
    <div className="full-width-container life-pp-widget-container">
      <div className="content">
        <div className="life-pp-widget" id="life-pp-widget">
          <div className="life-pp-header" id="LifeAtPhonepe">
            <div className="life-pp-header-image-container">
              <div
                className=" gatsby-image-wrapper"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "49%" }}
                />
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEhUlEQVQ4y42Te0yTZxTGTwFxcbI51CDgBigRwtxNJ6CCoG6CoNyGgg42cSAyLuKGio47ghOooEAjAgLFInIxqMMyKAVEB7QWvrb0KzDaD5iMFsShhpEA7Vm+LiZkf+1Jfjkn5yRvnnPe9wVSjPAG+RJ0NQJBTuBbdFzSf5skNN6y3sVrsj5NA0lo60lCmy8XY7BcrLUEmWheh7j7pb6sd8Gs/+ncSrJvcR0p1gaSYswiCS3zXzR+JKFxJQltm1yCLcPDWKkYwnRSjJdIQltDEtoyuRhvgFKBgIjw6G4PDPbjtwNSTJZLMI0ktBGy3gVrSfer5UNyNBvsR39dT4qZA10zZxoT7yYk7L3u8CyvdIVMOG9P/Y7rhwcQQMCjGAKeko62Ah4VK+SPxQp4lLW4awYkPdMgeTIOXVyZaXfToH9PsyJqiJyxjNySezRiWyH6bmA1+pkznQLWp6wzDRzUi9tfpw+CVorGQNg6whHyKLaAR5UJeZRU0EI1izrG0kRtI3cEPIoUto5U97RQlZIno6WT41MfB3jwtnC2R1hUH8o4n+RV8frUF5XBYbs4AEIeRbNMwKOWC7gKkD59AZzHaCTtnfZtvztQwb+vSBobml716q85GB99DYhqekWGnadzjhT6XpWk7ivE89uZGOV4nTq0ufQKaNy6AAEAEOFPRMg+kk2njF88oo9f2pf3POSjghx20iN4D36AQItcWPvpCGCqycoTtlnxAZuLF0Jc7uB3zhwMdeHg0c9uInAn1QzupBr4qIXfEN/lRBc4X9xxWfajawlG2rPwtFPRfKBdqWCPUc7P3zsWn7v2NbvngvO1lPideeAAacbuJsyo4863pk64VldshNPGwFWraWy5E6r6X59P1jWIh0WpaW0Y4VOPx3fdxnC3GowLuY8pybypkgbJRM7lrrmv7Mpj/Rz49OjLVSo82NX6qrG/T8MZVWIWcFUqmk1NarXbvcFRIwJxVT9q3GsJZcVPkQ/bE842F/FxcQ8irlMjWihRa305tHkN/dQQ0WZEiqEv+tCiXTpr2P141pJ2x6BdNqnV8EDxDOSI8BJRt1NEXCa/qdw9E19i67/2icE9pswo6Bwu8wQf6AhP+zDxALsqJvphKiIycv54BnVjM/BmZPpQPe6ECkoKevUSIQ2uhHXsSA+Vnk051oPMk52KoqQBs7Yz9wFTQ4zbT1xMyPNkzqTvzMK4gAqMvyMay+wfrmaqxmvo+wU+fwraWlXA56t1zi7sugGinE7dD9oE5+xWQ4bJg5jbAPAUkh0yyyN3FmOwfSXGfsmejXAo0R5zvIVH91RisCdnFJaqjT8J6twhCLfKBlG+UFf7BBJgI1yCoM9vM5yMWWCuX77azZx1Kmhr2WDY7moMdmD/HbC5uNjdMHuvLYSugf/qsF05eJhegW/sa8HbigU+Viw9f5tixmHrAgi0YYHtO2xwMsoFS4hZEeZSlRFzoP5k9P46cIF02AZn4X/J27IAvCwKwd+mCHw3sMDD9KrBVkiCUJcqiPVpgEj3WoOD7+freX1QwPgH8wirvWsTGooAAAAASUVORK5CYII="
                  />
                  <source srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAACxLAAAsSwGlPZapAAAC7UlEQVQoz2XQeUiTcRjA8ccME8zICI+gkAyzLVdKbmrNMhtlWaIrj7BSwaJStAMUAzvU1C2PZabmtQzKUIlWzeV0OdRim7nNPPNo7dX5vlPTLLUUe2JG0PGDh+e/z/PlB/DP69YidCgXQKuYtx7oRU9qFN0n+r56TYwirUuDzn3v0LVHi57d6sVd3ZpFVu87dOzrRMeeDmR1axZd4T9Qg0sbEc2uMK5aB9ikhsWz8t/mRdf6jxhxg6rR4DyzgDCsX4QeOZp3KL7QtW8m3dUtRht16/jfWI8Wl0DhDSU8zVaAIPC2eYhzkdM5/+pwaVW7m0o64NP8vD9Q2fAheJiY81a2Un6vxf2HldJBjrLhQ5CqUbcX+ATxe8yyCD1UDBmX8LlhNFUCdz0fAM4AwCm4e0EEKVEvQK6etkwNechT3BQyE/cLobNtEJqTJ0Ep09H/BIFH6GFOgXDZ8N5sVoUWbbpfaGWhFq7u5MenHCpJCN5aejyCXlx5gSnAFHbumICTGTeIhpWdOAHyLgMAT68Hvl5vyyOITTlDOod2REAZrlJqvvuq2+d3I+KapD0VEO0lzEhPelmTGCuujOXWfD7JqsSYgOofacl1j5qmKLbYQHIkBpJmKvPlEcQevu7jtqwxamf6t8/eeaOkn2Ca9JYjrhbESw+8r61fGwNWptoVpu8Y1LStiztUxa3rG9iMiMsQp0FCkdYSimKY6iwzJsehWCQDA9haPbuUzbxe1bp+38YiyyP2ueyLHrmfsjk8RevZNM4s12NZRqTcXnBa3nLrfNc1fkCTvenA44oukJAkSCgKTCBcSpcuPwipEEYrYMR6Fo3EMAqyA52KRNHe9zHOpxwjd5RhHPPOVAE72eUsABxjiZgnvJ7Q7maSFqhFKCnphTqShDqKNFsCg+nlwKWVQZBLqV0A/cF2Bl1sEbql0Ibrci8i3E04dpRWmmMH+Q6IABHNCKHseojaLYZbCR9BI56BzJh2kDUa4ZXMCD8BRYaYllbAS5sAAAAASUVORK5CYII=" />
                  <img
                    aria-hidden="true"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAACxLAAAsSwGlPZapAAAC7UlEQVQoz2XQeUiTcRjA8ccME8zICI+gkAyzLVdKbmrNMhtlWaIrj7BSwaJStAMUAzvU1C2PZabmtQzKUIlWzeV0OdRim7nNPPNo7dX5vlPTLLUUe2JG0PGDh+e/z/PlB/DP69YidCgXQKuYtx7oRU9qFN0n+r56TYwirUuDzn3v0LVHi57d6sVd3ZpFVu87dOzrRMeeDmR1axZd4T9Qg0sbEc2uMK5aB9ikhsWz8t/mRdf6jxhxg6rR4DyzgDCsX4QeOZp3KL7QtW8m3dUtRht16/jfWI8Wl0DhDSU8zVaAIPC2eYhzkdM5/+pwaVW7m0o64NP8vD9Q2fAheJiY81a2Un6vxf2HldJBjrLhQ5CqUbcX+ATxe8yyCD1UDBmX8LlhNFUCdz0fAM4AwCm4e0EEKVEvQK6etkwNechT3BQyE/cLobNtEJqTJ0Ep09H/BIFH6GFOgXDZ8N5sVoUWbbpfaGWhFq7u5MenHCpJCN5aejyCXlx5gSnAFHbumICTGTeIhpWdOAHyLgMAT68Hvl5vyyOITTlDOod2REAZrlJqvvuq2+d3I+KapD0VEO0lzEhPelmTGCuujOXWfD7JqsSYgOofacl1j5qmKLbYQHIkBpJmKvPlEcQevu7jtqwxamf6t8/eeaOkn2Ca9JYjrhbESw+8r61fGwNWptoVpu8Y1LStiztUxa3rG9iMiMsQp0FCkdYSimKY6iwzJsehWCQDA9haPbuUzbxe1bp+38YiyyP2ueyLHrmfsjk8RevZNM4s12NZRqTcXnBa3nLrfNc1fkCTvenA44oukJAkSCgKTCBcSpcuPwipEEYrYMR6Fo3EMAqyA52KRNHe9zHOpxwjd5RhHPPOVAE72eUsABxjiZgnvJ7Q7maSFqhFKCnphTqShDqKNFsCg+nlwKWVQZBLqV0A/cF2Bl1sEbql0Ibrci8i3E04dpRWmmMH+Q6IABHNCKHseojaLYZbCR9BI56BzJh2kDUa4ZXMCD8BRYaYllbAS5sAAAAASUVORK5CYII="
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 0,
                      transitionDelay: "500ms",
                    }}
                  />
                </picture>
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/69585/fish-mobile.png 200w,
https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/497c6/fish-mobile.png 400w,
https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/061dc/fish-mobile.png 414w"
                  />
                  <source
                    srcSet="https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/69585/fish-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/497c6/fish-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ee604/fish-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/f3583/fish-desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/5707d/fish-desktop.png 1600w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ec16a/fish-desktop.png 2386w"
                  />
                  <img
                    srcSet="https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/69585/fish-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/497c6/fish-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ee604/fish-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/f3583/fish-desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/5707d/fish-desktop.png 1600w,
https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ec16a/fish-desktop.png 2386w"
                    alt="{AppConst.LogoName} Careers Fish!"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  &lt;picture&gt;&lt;source media="(max-width: 600px)"
                  srcset="https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/69585/fish-mobile.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/497c6/fish-mobile.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/dcf3f7cfd3187cf89abee2bf8deda5a1/061dc/fish-mobile.png
                  414w" /&gt;&lt;source
                  srcset="https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/69585/fish-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/497c6/fish-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ee604/fish-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/f3583/fish-desktop.png
                  1200w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/5707d/fish-desktop.png
                  1600w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ec16a/fish-desktop.png
                  2386w" /&gt;&lt;img loading="lazy"
                  srcset="https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/69585/fish-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/497c6/fish-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ee604/fish-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/f3583/fish-desktop.png
                  1200w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/5707d/fish-desktop.png
                  1600w,
                  https://www.phonepe.com/webstatic/6444/static/23d2ce2eb0281b18aa388c9c7ff99ed1/ec16a/fish-desktop.png
                  2386w" src="" alt="{AppConst.LogoName} Careers Fish!"
                  style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                </noscript>
              </div>
            </div>
            <div className="life-pp-header-title-container">
              <h2 className="lg-display">Life @ {AppConst.LogoName}</h2>
              <h2 className="xs-display">
                Life @ <br /> {AppConst.LogoName}
              </h2>
              <p className="lg-display">
                Here’s how we celebrate work and life at {AppConst.LogoName}!
              </p>
              <p className="xs-display">
                Here’s how we celebrate work and <br /> life at {AppConst.LogoName}!
              </p>
            </div>
          </div>
          <div className="life-pp-main-video">
            <div className="life-pp-main-video-thumbnail">
              <div
                className=" gatsby-image-wrapper"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "55.5%" }}
                />
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAD2UlEQVQ4yx3S20+TZwDA4S/L5qKSZeridKdk7sIZI8GBEE80gIigUzqhg0YYCIJKsWAFsbErhwJFoLTQA6UFKVCECgL1WBA8IUbcZqYbmizD6OV247d12ZIl72/Jnr/hkbIzdzz9Rq34uyA34XVRXqJcUrhL9jQXyiNd5fLFTq084i6Thxyl8mhXuTziLpfHvBVyhylfPpafJB8vSJaL8nbJhw8lyrlZij+yDu74XTrXVPFPm0VPu82A01GD02mi217Jjb4qQgN6Qv1nCPWdYbJfz02/gWs+PU7LKRzOBhwdJjraa2hpOUtjYxW1tTokl1H9p7dOTXfDEdFnKRVDdp3wW0uFz5wvBsx5wm/OE4NNh8XguUIx1HJU+FuOimF7hRj11gjPkEF47WeFr61KDLjrRHe7UUhdpR+He/UR1GqjxZhDy5BJQ8BWyWVnORM2DWP2E4w7yphwniRo13LFepwJl46go5yzJfkUqTLR5p7goqWFS21VSM4za8LTeWuYVa4VtyzpXHH1Mjc+yPxMgHt3rzLn0fCodC0P27OZmxlnfjrA89kL+DqG6TIqeb2Qws1eFRpbD0OhHqT73RHh9pIYrBXbxexwNN8PTvDk5jRPns/xdLaXRdN6XpQt4de6rdxu9PNg9B4vF+5g1F6iWlPNq/m9uGqN7DvkI66jCMl7/s3wjvObMD1OE65bB/i5p58f79zn5WMtv11/j1cjqcx4TvPLDTfBtn4eXL3Hi2ez6AoDtKbq+LfkHQaUR8jZNkhCjQEpxa0L69s+5JFdEmOOlcw0v8XdQDqLC35+CKax+MRN8HKAhWePCV0b5buf5pkM7Od680qC1jimGlbzKOczhs1NFFuakZTFxWFVRgzu+p1iaqKKh+NKHk5XcWvuLp5uF1O3p3F5HMzeCeHttBK8OsFkUM+DgBKzrYQoxRdEr1tDWW0lXaM+pOi4yPAHH71PQnK8KCjOIivnIJ4eG12W0xi1X9NqLMZSfQxXYxkGjYrW6mP/H1Rm7mNX0laWvb0U6Y0lRG6JobAkB0mxOyG8YtW7JMZ+KgwV2eSfLsM32Emos5TrzSomrbmELDlM2QoIteYy4zmJt89GrrYA9YF4IpYtJWL5ctKVe/A2FCPtTkv8a8P6T0iMWyeOa7Jp6XNhtploOpGK37CX4boMLtRkcLFeTZ9BhVn7FY22Wr611qDcG8/qVSuIivycDNV+0lPjkTZEbXwduSWKTbGbxc4UBWmZX3Ioazf1hdvo1CXhOplEp24P3sp9OE/tp74oGbU6jZSDqWzZGUd8soLNsZuJ2R5LnGIb/wFXXH6AvjOhdwAAAABJRU5ErkJggg=="
                  />
                  <source srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaElEQVQozwXBa0xbZQAG4JNoplmmm7ipy4yRRNzFjTCKG5mQKKEigqBUYCAU2Lp1bYFyK4WWFtpiWyiVnra2tIVC6QVGaQUqt6Cdu2RMh0ZGmEtMONli4l9r/LWd870+D9XeJvxXoWgkapWI7deK2YF+CWs1ydjFSQW7Ot3DrgSU7PKUkl0N9LLrITUb+baD1feLWb1WymrVYrZHeZntaBc+a5bV4OrVqieUwyAmPksL/NYOBOxKzPr6ERlTIzx6DVFagqjtGuZpCWL2ZsSdckTs7ZjzmxG6PozQtBlhtx4B7xBx0wP4xtj5H2VpqXjmaU2HU3GE0JoyEh2SkrBJSmIOOZkfEZHoqJRE6RYSo1tI3ComcZuMJFxtxKoVEWl9JekRyUjcZiQhcxuGe4QpasrAZ6e1ryApeIPckhzHmluLG5EZ/PLDDG7fWsNdtwhbHW/h3lQXNpNLeHAjhGRsDqNKMf64WYIl72WofJNkMjSCBY8tRW350tjk2AtQNvOJ13MW9+fUePD9FnZ3k3h4z4U9Sxb2ug/hoakB65Zl7G3fx/WJJMQCFx6v8eHu06BQOE1O2SqRP1qdojbsh9nuwJsQz79LnJs5WPFX4be5IP781Yi/14/iSaIcP0ad2FmdxaJ/AY92NhCgR2GsaEVKloaNSgGkn3hJ9kg3XjTXpSh9aJwtHVHDrnuN/OR8HcmJt/FzOAPbO2u4s6zGo91FJFYT2P59E+sbK7h524c744ex5P8AX2szMSFIRzjgINoxGvKB3hSlGlKyBYX5+DD/NBk0XIHb3oZYsBPxxRBMJj38kx44aCOC4zboNV2YnXHC72hGn+oSjqVnYN/+gyhrrCN6qwbKPkmKqrlY9DQ7l0cOHHyZK+XncBVflXOdg3puwafmJlWlXFBXxUUGa7mIoY4Laqu4hdAQVyO+xPELc7m0l/Zzzz2/jysq/ogzdNVCUHTuH6peWIaikgKcyjiKxi9yMEjrYA/74NI1YV73GRLDNfjOdBEJSwPCmkq4rAqYx62QSapw7NVDOHHiHTQ2fAl5fTHqyvKeUpnns3dP8848Ppl5ksnKzWZKqsuZ+iu1jFKYx4x1FjCero8Zr+JTZqL3c8bWWsLIm4qZyqZq5kLBBYaXy2N457KY9/PO753JOftXxnvH7/4Pnc8Ww4a8G+gAAAAASUVORK5CYII=" />
                  <img
                    aria-hidden="true"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaElEQVQozwXBa0xbZQAG4JNoplmmm7ipy4yRRNzFjTCKG5mQKKEigqBUYCAU2Lp1bYFyK4WWFtpiWyiVnra2tIVC6QVGaQUqt6Cdu2RMh0ZGmEtMONli4l9r/LWd870+D9XeJvxXoWgkapWI7deK2YF+CWs1ydjFSQW7Ot3DrgSU7PKUkl0N9LLrITUb+baD1feLWb1WymrVYrZHeZntaBc+a5bV4OrVqieUwyAmPksL/NYOBOxKzPr6ERlTIzx6DVFagqjtGuZpCWL2ZsSdckTs7ZjzmxG6PozQtBlhtx4B7xBx0wP4xtj5H2VpqXjmaU2HU3GE0JoyEh2SkrBJSmIOOZkfEZHoqJRE6RYSo1tI3ComcZuMJFxtxKoVEWl9JekRyUjcZiQhcxuGe4QpasrAZ6e1ryApeIPckhzHmluLG5EZ/PLDDG7fWsNdtwhbHW/h3lQXNpNLeHAjhGRsDqNKMf64WYIl72WofJNkMjSCBY8tRW350tjk2AtQNvOJ13MW9+fUePD9FnZ3k3h4z4U9Sxb2ug/hoakB65Zl7G3fx/WJJMQCFx6v8eHu06BQOE1O2SqRP1qdojbsh9nuwJsQz79LnJs5WPFX4be5IP781Yi/14/iSaIcP0ad2FmdxaJ/AY92NhCgR2GsaEVKloaNSgGkn3hJ9kg3XjTXpSh9aJwtHVHDrnuN/OR8HcmJt/FzOAPbO2u4s6zGo91FJFYT2P59E+sbK7h524c744ex5P8AX2szMSFIRzjgINoxGvKB3hSlGlKyBYX5+DD/NBk0XIHb3oZYsBPxxRBMJj38kx44aCOC4zboNV2YnXHC72hGn+oSjqVnYN/+gyhrrCN6qwbKPkmKqrlY9DQ7l0cOHHyZK+XncBVflXOdg3puwafmJlWlXFBXxUUGa7mIoY4Laqu4hdAQVyO+xPELc7m0l/Zzzz2/jysq/ogzdNVCUHTuH6peWIaikgKcyjiKxi9yMEjrYA/74NI1YV73GRLDNfjOdBEJSwPCmkq4rAqYx62QSapw7NVDOHHiHTQ2fAl5fTHqyvKeUpnns3dP8848Ppl5ksnKzWZKqsuZ+iu1jFKYx4x1FjCero8Zr+JTZqL3c8bWWsLIm4qZyqZq5kLBBYaXy2N457KY9/PO753JOftXxnvH7/4Pnc8Ww4a8G+gAAAAASUVORK5CYII="
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 0,
                      transitionDelay: "500ms",
                    }}
                  />
                </picture>
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/69585/main-video-thumbnail-mobile.png 200w,
https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/497c6/main-video-thumbnail-mobile.png 400w,
https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/c8393/main-video-thumbnail-mobile.png 661w"
                  />
                  <source
                    srcSet="https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/69585/main-video-thumbnail-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/497c6/main-video-thumbnail-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/ee604/main-video-thumbnail-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/f3583/main-video-thumbnail-desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/7a9f5/main-video-thumbnail-desktop.png 1221w"
                  />
                  <img
                    srcSet="https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/69585/main-video-thumbnail-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/497c6/main-video-thumbnail-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/ee604/main-video-thumbnail-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/f3583/main-video-thumbnail-desktop.png 1200w,
https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/7a9f5/main-video-thumbnail-desktop.png 1221w"
                    alt="Life at {AppConst.LogoName} Main Video!"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  &lt;picture&gt;&lt;source media="(max-width: 600px)"
                  srcset="https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/69585/main-video-thumbnail-mobile.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/497c6/main-video-thumbnail-mobile.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/b3b01f6265c239aab1d877d2164e61ad/c8393/main-video-thumbnail-mobile.png
                  661w" /&gt;&lt;source
                  srcset="https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/69585/main-video-thumbnail-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/497c6/main-video-thumbnail-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/ee604/main-video-thumbnail-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/f3583/main-video-thumbnail-desktop.png
                  1200w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/7a9f5/main-video-thumbnail-desktop.png
                  1221w" /&gt;&lt;img loading="lazy"
                  srcset="https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/69585/main-video-thumbnail-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/497c6/main-video-thumbnail-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/ee604/main-video-thumbnail-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/f3583/main-video-thumbnail-desktop.png
                  1200w,
                  https://www.phonepe.com/webstatic/6444/static/68fcda101c1909cdff251db1819676a9/7a9f5/main-video-thumbnail-desktop.png
                  1221w" src="" alt="Life at {AppConst.LogoName} Main Video!"
                  style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                </noscript>
              </div>
              <img
                className="life-pp-main-video-play-icon"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA4NCA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80MDFfMTIwODMpIj4KPGNpcmNsZSBjeD0iNDIuMDc4MiIgY3k9IjM4LjQ3NTIiIHI9IjM3Ljk0IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI0Mi4wNzgyIiBjeT0iMzguNDc1MiIgcj0iMzcuNDU5OCIgc3Ryb2tlPSIjOEM4QzhDIiBzdHJva2Utd2lkdGg9IjAuOTYwNTA2Ii8+CjwvZz4KPHBhdGggZD0iTTM1Ljk0MDkgMjkuMzkzOEMzNS45NDA5IDI3LjgxMTUgMzcuNjkxNCAyNi44NTU4IDM5LjAyMjQgMjcuNzExNEw1My4xNDkzIDM2Ljc5M0M1NC4zNzM5IDM3LjU4MDMgNTQuMzczOSAzOS4zNzA0IDUzLjE0OTMgNDAuMTU3N0wzOS4wMjI0IDQ5LjIzOTJDMzcuNjkxNCA1MC4wOTQ5IDM1Ljk0MDkgNDkuMTM5MiAzNS45NDA5IDQ3LjU1NjlWMjkuMzkzOFoiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDAxXzEyMDgzIiB4PSIwLjI5NjE1OCIgeT0iMC41MzUxNTYiIHdpZHRoPSI4My41NjM5IiBoZWlnaHQ9IjgzLjU2NDIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMy44NDIwMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjkyMTAxIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQwMV8xMjA4MyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd180MDFfMTIwODMiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
              />
            </div>
          </div>
          <div className="life-pp-carousel-container">
            <div className="life-pp-carousel" id="life-pp-carousel">
              <div
                className="slick-slider life-at-pp-slider slick-initialized"
                dir="ltr"
              >
                <div className="slick-arrow slick-prev slick-disabled">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy40IDIzLjIzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMS41LDEuNUwxMS45LDExLjM2LDEuNSwyMS43MyIvPgo8L3N2Zz4K" />
                </div>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{ width: 2135, left: 0, opacity: 1 }}
                  >
                    <div
                      data-index={0}
                      className="slick-slide slick-active slick-current"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 427 }}
                    >
                      <div>
                        <div
                          className="life-pp-card-container"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "73.5%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUUlEQVQ4yxXM209bBQAH4BPjsumWxekcE9ZyKbS2XHqjBU7X00OhXSkd9AKspXQrg3LpoASmuwgbuzKjDOZYHCGwOeoQd3FxbmZbZjSa6Lv2YYnPxgdjNBETDWe/n/H7Az4h5jGwXdast0tqJSrlK31NxcpYW7kynrApE4lq5WSyRjmZrFOOxozPR1qLlZFgiTLUqlHSQZ0yECxX+kImJd0hrh/q9HKop3NG8DXKFG0iA14v06kEj2SG+dbgKAfinWzz1rLBXsZm2crwHhfDfh8THTF2J1Ls7EgyHu1mS6CNkiTB6XJzJDPys2DQVtFh9sFhboZobodoPIyh7seQzHPYsaUV27fZoNrhR3FeFH73O/BIx2DU7EP1m23Q7WrHru12vPzSBmhKCjl5YvxHQax1UbaFUFXiQ8ErXsj2fkyMPEY6eg4GdRsazV4YVSEY1AfQHb2AsO80XKZudPniMGv7UKqSUFj4BhobG7i0OJ8T6l1e2iv8qNI0Q6eqRbzRgYOtPejx1yPplzAcdCDhcSPsdMNlqkNIMrDGIKNMbYGhKIJitQ2WagtCkQjv37+TE1r8e1lZWg9VngipUsuAZGKgRstArYYtdToG5UpmYvUM+xyM76lBsN5KW2UxN2wqgMciw2nRwmSvw/4DCX791cOc0NcbpyrPgh3b1NQZTRBrrIi4TbBUaNHQ6EKrz4W+rjCi0TBCTW72hmR0+WuhKtDQ7/PQZq2CrrwKo6MZfvftk5wwcTxDVX4lrJoi+twSVDtfh8loZIvHSX/zHkQ8DsTivYj5mzDaP4zhTJoDAwfht+sZjCWx1ytBrtbj7NlJZrPXc8Kli6dZpDbg1W1FLMgvwMZNm2HWqhip08GmK6K3xsjNO0VsL3TxhS2lUOsDLLf6uXXzVuzML6PNaqHL5cTc3AzPTZ3PCTeWZlhaooPwYh4kayVkUwl9dh1sVXoWFpphF8MIxI5xIfsUy7eeYOzIElwNcVRYZdR6ulhdJ2O3y42Fhas8eWYqJ8y+d4Ll+nJs3PQatJoK6Es0sFnMLNFbadCbYJcn8c0P6/xHAdb+Xucfa8T5qduwOYN0NnWj3htgoCWE5eUbHBo7nhNOjR9iui+BsjItRZMBYWc1Qm6Rqc4IUmEH3c5+fjCv4N6jNV6Y/g13vwSHRueZp9kNu6uFbreTbe3tuDx3hZF9XTnh5o1p3r31ISYnhjGUDNPndtAiNsDvlimJlWhu6MHpKWDs6J8M7P0d17Jg/6FzLDWYkckMcm7mBKfOvo3Do4OMxTp+ElaWZ/B/emtllsePDkMUayFKbhaWGqA3mlknp/D0+zVmb//L/cm/OH35V7RHD2Nx8Qo//yyL1ZtX+enKPLLXZ3lpevyZ8El2lrdXruDjjy7ywb1rTKdTFKV69qRSGBzK0NPShY7eM3j30jOemvqF6bEsFq+v4tGjh3xwfxX37lzj6s3550sL73NudvKL/wC9A1nG37BbwQAAAABJRU5ErkJggg=="
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/69585/carousel-obj-thumbnail-1.png 200w,
https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/497c6/carousel-obj-thumbnail-1.png 400w,
https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/6db29/carousel-obj-thumbnail-1.png 728w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/69585/carousel-obj-thumbnail-1.png 200w,
https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/497c6/carousel-obj-thumbnail-1.png 400w,
https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/6db29/carousel-obj-thumbnail-1.png 728w"
                                alt="Life at {AppConst.LogoName} Carousel Thumbnail"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/69585/carousel-obj-thumbnail-1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/497c6/carousel-obj-thumbnail-1.png
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/6db29/carousel-obj-thumbnail-1.png
                              728w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/69585/carousel-obj-thumbnail-1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/497c6/carousel-obj-thumbnail-1.png
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/a3728cf4579336e811163518c49a4742/6db29/carousel-obj-thumbnail-1.png
                              728w" src="" alt="Life at {AppConst.LogoName} Carousel
                              Thumbnail"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                          <img
                            className="life-pp-card-video-play-icon"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA4NCA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80MDFfMTIwODMpIj4KPGNpcmNsZSBjeD0iNDIuMDc4MiIgY3k9IjM4LjQ3NTIiIHI9IjM3Ljk0IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI0Mi4wNzgyIiBjeT0iMzguNDc1MiIgcj0iMzcuNDU5OCIgc3Ryb2tlPSIjOEM4QzhDIiBzdHJva2Utd2lkdGg9IjAuOTYwNTA2Ii8+CjwvZz4KPHBhdGggZD0iTTM1Ljk0MDkgMjkuMzkzOEMzNS45NDA5IDI3LjgxMTUgMzcuNjkxNCAyNi44NTU4IDM5LjAyMjQgMjcuNzExNEw1My4xNDkzIDM2Ljc5M0M1NC4zNzM5IDM3LjU4MDMgNTQuMzczOSAzOS4zNzA0IDUzLjE0OTMgNDAuMTU3N0wzOS4wMjI0IDQ5LjIzOTJDMzcuNjkxNCA1MC4wOTQ5IDM1Ljk0MDkgNDkuMTM5MiAzNS45NDA5IDQ3LjU1NjlWMjkuMzkzOFoiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDAxXzEyMDgzIiB4PSIwLjI5NjE1OCIgeT0iMC41MzUxNTYiIHdpZHRoPSI4My41NjM5IiBoZWlnaHQ9IjgzLjU2NDIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMy44NDIwMyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjkyMTAxIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQwMV8xMjA4MyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd180MDFfMTIwODMiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={1}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 427 }}
                    >
                      <div>
                        <div
                          className="life-pp-card-container"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "67%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAEPTaIoU6P/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMABBETIf/aAAgBAQABBQIV4mLkYtPFkvSuqjoiIR//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/AcR//8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAhAhEjFBQlH/2gAIAQEABj8C0cb2zUKvsTLMJqH6f//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/IX1FNIi8uy/Jd2fVga3q4BY4uiMA1DG0/9oADAMBAAIAAwAAABC7/wD/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QSpB//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ENAz/8QAHhABAAICAgMBAAAAAAAAAAAAAREhAEFRYTGRocH/2gAIAQEAAT8QSsAol0zXBJlBxMNhlsdavAsgLtO/3FclRdHnUdR9wuDYhb6yKwhBlzZ3n//Z"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f836f/carousel-obj-thumbnail-2.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/2244e/carousel-obj-thumbnail-2.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f9913/carousel-obj-thumbnail-2.jpg 750w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f836f/carousel-obj-thumbnail-2.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/2244e/carousel-obj-thumbnail-2.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f9913/carousel-obj-thumbnail-2.jpg 750w"
                                alt="Life at {AppConst.LogoName} Carousel Thumbnail"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f836f/carousel-obj-thumbnail-2.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/2244e/carousel-obj-thumbnail-2.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f9913/carousel-obj-thumbnail-2.jpg
                              750w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f836f/carousel-obj-thumbnail-2.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/2244e/carousel-obj-thumbnail-2.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/8af651194b42ecadb7cb4478954c070c/f9913/carousel-obj-thumbnail-2.jpg
                              750w" src="" alt="Life at {AppConst.LogoName} Carousel
                              Thumbnail"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={2}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 427 }}
                    >
                      <div>
                        <div
                          className="life-pp-card-container"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "67%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAU9+I5q1lf8A/8QAGBABAQEBAQAAAAAAAAAAAAAAAQMCABH/2gAIAQEAAQUC3fWpt9c0ekDpkFPQ7//EABcRAQADAAAAAAAAAAAAAAAAAAACESH/2gAIAQMBAT8Bjqn/xAAYEQACAwAAAAAAAAAAAAAAAAAAEgECYf/aAAgBAgEBPwG0qPh//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAESUREhMmH/2gAIAQEABj8C9OjTeCMVZao5R//EABwQAQACAwADAAAAAAAAAAAAAAEAETFBUSFhkf/aAAgBAQABPyEKn0cjS23dS+ABirgRU+nY9sNCMR8Ml//aAAwDAQACAAMAAAAQO/8A/8QAGBEBAQADAAAAAAAAAAAAAAAAAQARMUH/2gAIAQMBAT8Q4EYbS//EABgRAQADAQAAAAAAAAAAAAAAAAEAIaHR/9oACAECAQE/ECCsvYs7P//EAB8QAQACAgICAwAAAAAAAAAAAAERIQAxQVFhcYGx8P/aAAgBAQABPxBlBlraId9849YSABJ8zx8YEAlIKlbgZb3k44CRcQzuesW4ItTcP3vEGNOwfvP/2Q=="
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f836f/carousel-obj-thumbnail-3.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/2244e/carousel-obj-thumbnail-3.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f9913/carousel-obj-thumbnail-3.jpg 750w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f836f/carousel-obj-thumbnail-3.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/2244e/carousel-obj-thumbnail-3.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f9913/carousel-obj-thumbnail-3.jpg 750w"
                                alt="Life at {AppConst.LogoName} Carousel Thumbnail"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f836f/carousel-obj-thumbnail-3.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/2244e/carousel-obj-thumbnail-3.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f9913/carousel-obj-thumbnail-3.jpg
                              750w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f836f/carousel-obj-thumbnail-3.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/2244e/carousel-obj-thumbnail-3.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/7ae8ca9170e21df3eacc9b5cf366377a/f9913/carousel-obj-thumbnail-3.jpg
                              750w" src="" alt="Life at {AppConst.LogoName} Carousel
                              Thumbnail"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={3}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 427 }}
                    >
                      <div>
                        <div
                          className="life-pp-card-container"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "56.5%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABlZlWVhII/wD/xAAZEAADAQEBAAAAAAAAAAAAAAABAhIDABH/2gAIAQEAAQUCXQ82rDk2SSopBSyPP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AUf/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIS/9oACAECAQE/AVZtH//EAB0QAAIBBAMAAAAAAAAAAAAAAAABEQIQIjFBUWH/2gAIAQEABj8Cnjw2ZpSVrobdv//EABoQAQEBAAMBAAAAAAAAAAAAAAERACExkUH/2gAIAQEAAT8hoplTlu2eQPdcMhwCeYAFTDhT5v/aAAwDAQACAAMAAAAQCP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxA3E//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEWH/2gAIAQIBAT8QBNNuN//EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhgf/aAAgBAQABPxAm8gwFyFjTtI6+GE4DB3EdikJAGajXCBfjjFJNrM//2Q=="
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f836f/carousel-obj-thumbnail-4.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/2244e/carousel-obj-thumbnail-4.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f9913/carousel-obj-thumbnail-4.jpg 750w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f836f/carousel-obj-thumbnail-4.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/2244e/carousel-obj-thumbnail-4.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f9913/carousel-obj-thumbnail-4.jpg 750w"
                                alt="Life at {AppConst.LogoName} Carousel Thumbnail"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f836f/carousel-obj-thumbnail-4.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/2244e/carousel-obj-thumbnail-4.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f9913/carousel-obj-thumbnail-4.jpg
                              750w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f836f/carousel-obj-thumbnail-4.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/2244e/carousel-obj-thumbnail-4.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/588bb8d2fa6476916c183f212c3872a0/f9913/carousel-obj-thumbnail-4.jpg
                              750w" src="" alt="Life at {AppConst.LogoName} Carousel
                              Thumbnail"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={4}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 427 }}
                    >
                      <div>
                        <div
                          className="life-pp-card-container"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "66.5%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAFmWmWNyUf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMRBCEjIv/aAAgBAQABBQKWb0z8TPsGsh35EC//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BqP/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhEhMv/aAAgBAQAGPwJwglZdackxOjdP/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUExcf/aAAgBAQABPyEiBAXsrlYXyKN+MhOFh3FGAXhhzAxuf//aAAwDAQACAAMAAAAQ9N//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QFMJN/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAECAQE/EFjkf//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExQVH/2gAIAQEAAT8QDRnJYkXd75MkmAo6T3EDQHrYPDFnbRiSo48HT8B+4g7makvmf//Z"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f836f/carousel-obj-thumbnail-5.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/2244e/carousel-obj-thumbnail-5.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f9913/carousel-obj-thumbnail-5.jpg 750w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f836f/carousel-obj-thumbnail-5.jpg 200w,
https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/2244e/carousel-obj-thumbnail-5.jpg 400w,
https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f9913/carousel-obj-thumbnail-5.jpg 750w"
                                alt="Life at {AppConst.LogoName} Carousel Thumbnail"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f836f/carousel-obj-thumbnail-5.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/2244e/carousel-obj-thumbnail-5.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f9913/carousel-obj-thumbnail-5.jpg
                              750w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f836f/carousel-obj-thumbnail-5.jpg
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/2244e/carousel-obj-thumbnail-5.jpg
                              400w,
                              https://www.phonepe.com/webstatic/6444/static/37214710299d31c6aa112d3280c72ece/f9913/carousel-obj-thumbnail-5.jpg
                              750w" src="" alt="Life at {AppConst.LogoName} Carousel
                              Thumbnail"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-arrow slick-next">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy40IDIzLjIzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMS41LDEuNUwxMS45LDExLjM2LDEuNSwyMS43MyIvPgo8L3N2Zz4K" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wavy-line-container lg-display">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI5IiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzI5IDMzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzc1LjkzOSAzLjY5NDgyTDMyMy4yNDcgMjQuMTE1MkMzMDYuMDEzIDMwLjc5NzggMjg2Ljg5MyAzMC43NDIzIDI2OS42OTkgMjMuOTgwNUwyNDAuNDI0IDEyLjQ2MjNDMjIzLjIyMiA1LjY5MjQ3IDIwNC4xMSA1LjY0NDkxIDE4Ni44NzYgMTIuMzI3NUwxNjAuOTg2IDIyLjM2MzNDMTQzLjc1MiAyOS4wNDU5IDEyNC42MzIgMjguOTkwNCAxMDcuNDM4IDIyLjIyODZMNzguODc2MiAxMC45OTU3QzYxLjI0NjIgNC4wNTk0NyA0MS42MjY1IDQuMTg2MzEgMjQuMDkxNiAxMS4zNTI1TDMuODUzNTIgMTkuNjIwNSIgc3Ryb2tlPSIjRDdEMUZGIiBzdHJva2Utd2lkdGg9IjcuMTM0NDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
            alt="Life at Phone Wave Line"
          />
        </div>
      </div>
    </div>
  );
}

export default LifeFpsJob