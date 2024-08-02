var myHtml =  '<!DOCTYPE html>' +
'<html>' +
' <div>' +
'<head>' +
'    <style>' +
'        /* Floating "Talk to us" button */' +
'        #contactUsBtn {' +
'            position: fixed;' +
'            top: 20px;' +
'            right: 20px;' +
'            background-color: #00ff2a65;' +
'            color: white;' +
'            border: none;' +
'            border-radius:14% 32% 0% 29% / 0% 91% 59% 60% ;' +
'            padding: 10px 20px;' +
'            font-size: 16px;' +
'            cursor: pointer;' +
'            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);' +
'            z-index: 10000;' +
'            display: flex;' +
'            align-items: center;' +
'            transition: transform 0.3s ease;' +
'        }' +
'        #contactUsBtn:hover {' +
'            transform: scale(1.05);' +
'        }' +
'        #contactUsBtn i {' +
'            margin-right: 8px;' +
'        }' +
'        /* Blur background */' +
'        #blurBackground {' +
'            position: fixed;' +
'            top: 0;' +
'            left: 0;' +
'            width: 100%;' +
'            height: 100%;' +
'            background: rgba(0, 0, 0, 0.5);' +
'            backdrop-filter: blur(10px);' +
'            z-index: 9998;' +
'            opacity: 0;' +
'            visibility: hidden;' +
'            transition: opacity 0.3s ease, visibility 0.3s ease;' +
'        }' +
'        /* iFrame container */' +
'        #iframeContainer {' +
'            position: fixed;' +
'            top: 49.9%;' +
'            left: 50%;' +
'            transform: translate(-50%, -50%) scale(0.8);' +
'            z-index: 9999;' +
'            display: none;' +
'            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);' +
'            opacity: 0;' +
'            transition: transform 0.3s ease, opacity 0.3s ease;' +
'        }' +
'        #iframeContainer.show {' +
'            display: block;' +
'            opacity: 1;' +
'            transform: translate(-50%, -50%) scale(1);' +
'        }' +
'        iframe {' +
'            border-radius: 8px;' +
'        }' +
'        /* Close button */' +
'        #closeBtn {' +
'            position: absolute;' +
'            top: -40px;' +
'            right: -30px;' +
'            font-size: 24px;' +
'            background: #fff;' +
'            border: none;' +
'            border-radius: 50%;' +
'            padding: 10px;' +
'            cursor: pointer;' +
'            z-index: 10000;' +
'            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);' +
'        }' +
'        /* In-form close button */' +
'        #formCloseBtn {' +
'            position: absolute;' +
'            top: 10px;' +
'            right: 10px;' +
'            background: #ff4b4b;' +
'            color: #fff;' +
'            border: none;' +
'            border-radius: 4px;' +
'            padding: 5px 10px;' +
'            cursor: pointer;' +
'            z-index: 10000;' +
'        }' +
'        #formCloseBtn:hover {' +
'            background: #ff0000;' +
'        }' +
'    </style>' +
'</head>' +
'    <!-- Floating "Talk to us" button -->' +
'    <button id="contactUsBtn">' +
'        <i>&#9993;</i> <!-- Envelope icon -->' +
'        Talk to us' +
'    </button>' +
'    <!-- Blur background -->' +
'    <div id="blurBackground"></div>' +
'    <!-- The div where the iframe will be inserted -->' +
'     <div class="everything-cont">' +
'    <div id="iframeContainer">' +
'        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdekiPxAUU3SnCtRJLbaUD4oeAEly2Q7lU7d7k6Vh_K8puMOg/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">' +
'            Loading…' +
'        </iframe>' +
'        <button id="formCloseBtn">Close</button>' +
'    </div>' +
'</div>' +
'    <script>' +
'        // Functionality to show iframe and blur background with transition' +
'        document.getElementById(\'contactUsBtn\').addEventListener(\'click\', function() {' +
'            document.getElementById(\'blurBackground\').style.visibility = \'visible\';' +
'            document.getElementById(\'blurBackground\').style.opacity = \'1\';' +
'            setTimeout(() => {' +
'                document.getElementById(\'iframeContainer\').classList.add(\'show\');' +
'            }, 500);' +
'            document.getElementById(\'contactUsBtn\').style.visibility = \'hidden\';' +
'        });' +
'        // Functionality to close iframe and remove blur background' +
'// My test close button' +
'        document.getElementById(\'formCloseBtn\').addEventListener(\'click\', function(){' +
'            document.getElementById(\'contactUsBtn\').style.visibility = \'visible\'; ' +
'            setTimeout(() => {' +
'                document.getElementById(\'blurBackground\').style.opacity = \'0\';' +
'                document.getElementById(\'blurBackground\').style.visibility = \'hidden\';' +
'                document.getElementById(\'iframeContainer\').classList.remove(\'show\');' +
'            }, 300);' +
'        });' +
'    </script>' +
'</div>' +
'</html>' +
document.getElementsById('a').innerhtml = 'myHt'