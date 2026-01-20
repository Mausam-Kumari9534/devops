exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 9590:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ResumeIframeCSR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8501);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2654);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5319);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_fonts_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* __next_internal_client_entry_do_not_use__ ResumeIframeCSR auto */ 





const getIframeInitialContent = (isA4)=>{
    const width = isA4 ? lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .A4_WIDTH_PT */ .BF : lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LETTER_WIDTH_PT */ .wG;
    const allFontFamilies = (0,components_fonts_lib__WEBPACK_IMPORTED_MODULE_5__/* .getAllFontFamiliesToLoad */ .z)();
    const allFontFamiliesPreloadLinks = allFontFamilies.map((font)=>`<link rel="preload" as="font" href="/fonts/${font}-Regular.ttf" type="font/ttf" crossorigin="anonymous">
<link rel="preload" as="font" href="/fonts/${font}-Bold.ttf" type="font/ttf" crossorigin="anonymous">`).join("");
    const allFontFamiliesFontFaces = allFontFamilies.map((font)=>`@font-face {font-family: "${font}"; src: url("/fonts/${font}-Regular.ttf");}
@font-face {font-family: "${font}"; src: url("/fonts/${font}-Bold.ttf"); font-weight: bold;}`).join("");
    return `<!DOCTYPE html>
<html>
  <head>
    ${allFontFamiliesPreloadLinks}
    <style>
      ${allFontFamiliesFontFaces}
    </style>
  </head>
  <body style='overflow: hidden; width: ${width}pt; margin: 0; padding: 0; -webkit-text-size-adjust:none;'>
    <div></div>
  </body>
</html>`;
};
/**
 * Iframe is used here for style isolation, since react pdf uses pt unit.
 * It creates a sandbox document body that uses letter/A4 pt size as width.
 */ const ResumeIframe = ({ documentSize , scale , children , enablePDFViewer =false  })=>{
    const isA4 = documentSize === "A4";
    const iframeInitialContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getIframeInitialContent(isA4), [
        isA4
    ]);
    if (enablePDFViewer) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicPDFViewer, {
            className: "h-full w-full",
            children: children
        });
    }
    const width = isA4 ? lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .A4_WIDTH_PX */ .Zs : lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LETTER_WIDTH_PX */ .iL;
    const height = isA4 ? lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .A4_HEIGHT_PX */ .qA : lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LETTER_HEIGHT_PX */ .J2;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            maxWidth: `${width * scale}px`,
            maxHeight: `${height * scale}px`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: `${width}px`,
                height: `${height}px`,
                transform: `scale(${scale})`
            },
            className: `origin-top-left bg-white shadow-lg`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_frame_component__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                style: {
                    width: "100%",
                    height: "100%"
                },
                initialContent: iframeInitialContent,
                children: children
            }, isA4 ? "A4" : "LETTER")
        })
    });
};
/**
 * Load iframe client side since iframe can't be SSR
 */ const ResumeIframeCSR = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.resolve(ResumeIframe), {
    ssr: false
});
// PDFViewer is only used for debugging. Its size is quite large, so we make it dynamic import
const DynamicPDFViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "C:\\Users\\saura\\Downloads\\SmartCV-Resume-main\\SmartCV-Resume-main\\src\\app\\components\\Resume\\ResumeIFrame.tsx -> " + "@react-pdf/renderer"
        ]
    },
    ssr: false
});


/***/ }),

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ ResumePDF)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@react-pdf/renderer/lib/react-pdf.cjs.js
var react_pdf_cjs = __webpack_require__(6212);
;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/styles.ts

// Tailwindcss Spacing Design System: https://tailwindcss.com/docs/theme#spacing
// It is converted from rem to pt (1rem = 12pt) since https://react-pdf.org/styling only accepts pt unit
const spacing = {
    0: "0",
    0.5: "1.5pt",
    1: "3pt",
    1.5: "4.5pt",
    2: "6pt",
    2.5: "7.5pt",
    3: "9pt",
    3.5: "10.5pt",
    4: "12pt",
    5: "15pt",
    6: "18pt",
    7: "21pt",
    8: "24pt",
    9: "27pt",
    10: "30pt",
    11: "33pt",
    12: "36pt",
    14: "42pt",
    16: "48pt",
    20: "60pt",
    24: "72pt",
    28: "84pt",
    32: "96pt",
    36: "108pt",
    40: "120pt",
    44: "132pt",
    48: "144pt",
    52: "156pt",
    56: "168pt",
    60: "180pt",
    64: "192pt",
    72: "216pt",
    80: "240pt",
    96: "288pt",
    full: "100%"
};
const styles = react_pdf_cjs.StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    flexRowBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexCol: {
        display: "flex",
        flexDirection: "column"
    },
    icon: {
        width: "13pt",
        height: "13pt",
        fill: "#525252"
    }
});

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/common/ResumePDFIcon.tsx



/**
 * Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License
 * - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 */ const EMAIL_PATH_D = "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z";
const PHONE_PATH_D = "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z";
const LOCATION_PATH_D = "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z";
const URL_PATH_D = "M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z";
const GITHUB_PATH_D = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";
const LINKEDIN_PATH_D = "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z";
const TYPE_TO_PATH_D = {
    email: EMAIL_PATH_D,
    phone: PHONE_PATH_D,
    location: LOCATION_PATH_D,
    url: URL_PATH_D,
    url_github: GITHUB_PATH_D,
    url_linkedin: LINKEDIN_PATH_D
};
const ResumePDFIcon = ({ type , isPDF  })=>{
    const pathD = TYPE_TO_PATH_D[type];
    if (isPDF) {
        return /*#__PURE__*/ jsx_runtime_.jsx(PDFIcon, {
            pathD: pathD
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(SVGIcon, {
        pathD: pathD
    });
};
const { width , height , fill  } = styles.icon;
const PDFIcon = ({ pathD  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Svg, {
        viewBox: "0 0 512 512",
        style: {
            width,
            height
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Path, {
            d: pathD,
            fill: fill
        })
    });
const SVGIcon = ({ pathD  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: {
            width,
            height,
            fill
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: pathD
        })
    });

// EXTERNAL MODULE: ./src/app/lib/constants.ts
var constants = __webpack_require__(2654);
// EXTERNAL MODULE: ./src/app/lib/redux/settingsSlice.ts
var settingsSlice = __webpack_require__(522);
;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/common/index.tsx





const ResumePDFSection = ({ themeColor , heading , style ={} , children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
        style: {
            ...styles.flexCol,
            gap: spacing[2],
            marginTop: spacing[5],
            ...style
        },
        children: [
            heading && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                style: {
                    ...styles.flexRow,
                    alignItems: "center"
                },
                children: [
                    themeColor && /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                        style: {
                            height: "3.75pt",
                            width: "30pt",
                            backgroundColor: themeColor,
                            marginRight: spacing[3.5]
                        },
                        debug: constants/* DEBUG_RESUME_PDF_FLAG */.BE
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                        style: {
                            fontWeight: "bold",
                            letterSpacing: "0.3pt"
                        },
                        debug: constants/* DEBUG_RESUME_PDF_FLAG */.BE,
                        children: heading
                    })
                ]
            }),
            children
        ]
    });
const ResumePDFText = ({ bold =false , themeColor , style ={} , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
        style: {
            color: themeColor || settingsSlice/* DEFAULT_FONT_COLOR */.xw,
            fontWeight: bold ? "bold" : "normal",
            ...style
        },
        debug: constants/* DEBUG_RESUME_PDF_FLAG */.BE,
        children: children
    });
};
const ResumePDFBulletList = ({ items , showBulletPoints =true  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((item, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                style: {
                    ...styles.flexRow
                },
                children: [
                    showBulletPoints && /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                        style: {
                            paddingLeft: spacing[2],
                            paddingRight: spacing[2],
                            lineHeight: "1.3"
                        },
                        bold: true,
                        children: "•"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                        style: {
                            lineHeight: "1.3",
                            flexGrow: 1,
                            flexBasis: 0
                        },
                        children: item
                    })
                ]
            }, idx))
    });
};
const ResumePDFLink = ({ src , isPDF , children  })=>{
    if (isPDF) {
        return /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Link, {
            src: src,
            style: {
                textDecoration: "none"
            },
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: src,
        style: {
            textDecoration: "none"
        },
        target: "_blank",
        rel: "noreferrer",
        children: children
    });
};
const ResumeFeaturedSkill = ({ skill , rating , themeColor , style ={}  })=>{
    const numCircles = 5;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
        style: {
            ...styles.flexRow,
            alignItems: "center",
            ...style
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                style: {
                    marginRight: spacing[0.5]
                },
                children: skill
            }),
            [
                ...Array(numCircles)
            ].map((_, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                    style: {
                        height: "9pt",
                        width: "9pt",
                        marginLeft: "2.25pt",
                        backgroundColor: rating >= idx ? themeColor : "#d9d9d9",
                        borderRadius: "100%"
                    }
                }, idx))
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFProfile.tsx





const ResumePDFProfile = ({ profile , themeColor , isPDF  })=>{
    const { name , email , phone , url , summary , location  } = profile;
    const iconProps = {
        email,
        phone,
        location,
        url
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ResumePDFSection, {
        style: {
            marginTop: spacing[4]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                bold: true,
                themeColor: themeColor,
                style: {
                    fontSize: "20pt"
                },
                children: name
            }),
            summary && /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                children: summary
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                style: {
                    ...styles.flexRowBetween,
                    flexWrap: "wrap",
                    marginTop: spacing[0.5]
                },
                children: Object.entries(iconProps).map(([key, value])=>{
                    if (!value) return null;
                    let iconType = key;
                    if (key === "url") {
                        if (value.includes("github")) {
                            iconType = "url_github";
                        } else if (value.includes("linkedin")) {
                            iconType = "url_linkedin";
                        }
                    }
                    const shouldUseLinkWrapper = [
                        "email",
                        "url",
                        "phone"
                    ].includes(key);
                    const Wrapper = ({ children  })=>{
                        if (!shouldUseLinkWrapper) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: children
                        });
                        let src = "";
                        switch(key){
                            case "email":
                                {
                                    src = `mailto:${value}`;
                                    break;
                                }
                            case "phone":
                                {
                                    src = `tel:${value.replace(/[^\d+]/g, "")}`; // Keep only + and digits
                                    break;
                                }
                            default:
                                {
                                    src = value.startsWith("http") ? value : `https://${value}`;
                                }
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFLink, {
                            src: src,
                            isPDF: isPDF,
                            children: children
                        });
                    };
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexRow,
                            alignItems: "center",
                            gap: spacing[1]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFIcon, {
                                type: iconType,
                                isPDF: isPDF
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                    children: value
                                })
                            })
                        ]
                    }, key);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFWorkExperience.tsx




const ResumePDFWorkExperience = ({ heading , workExperiences , themeColor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFSection, {
        themeColor: themeColor,
        heading: heading,
        children: workExperiences.map(({ company , jobTitle , date , descriptions  }, idx)=>{
            // Hide company name if it is the same as the previous company
            const hideCompanyName = idx > 0 && company === workExperiences[idx - 1].company;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                style: idx !== 0 ? {
                    marginTop: spacing[2]
                } : {},
                children: [
                    !hideCompanyName && /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                        bold: true,
                        children: company
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexRowBetween,
                            marginTop: hideCompanyName ? "-" + spacing[1] : spacing[1.5]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                children: jobTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                children: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexCol,
                            marginTop: spacing[1.5]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFBulletList, {
                            items: descriptions
                        })
                    })
                ]
            }, idx);
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFEducation.tsx




const ResumePDFEducation = ({ heading , educations , themeColor , showBulletPoints  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFSection, {
        themeColor: themeColor,
        heading: heading,
        children: educations.map(({ school , degree , date , gpa , descriptions =[]  }, idx)=>{
            // Hide school name if it is the same as the previous school
            const hideSchoolName = idx > 0 && school === educations[idx - 1].school;
            const showDescriptions = descriptions.join() !== "";
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                children: [
                    !hideSchoolName && /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                        bold: true,
                        children: school
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexRowBetween,
                            marginTop: hideSchoolName ? "-" + spacing[1] : spacing[1.5]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                children: `${gpa ? `${degree} - ${Number(gpa) ? gpa + " GPA" : gpa}` : degree}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                children: date
                            })
                        ]
                    }),
                    showDescriptions && /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexCol,
                            marginTop: spacing[1.5]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFBulletList, {
                            items: descriptions,
                            showBulletPoints: showBulletPoints
                        })
                    })
                ]
            }, idx);
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFProject.tsx




const ResumePDFProject = ({ heading , projects , themeColor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFSection, {
        themeColor: themeColor,
        heading: heading,
        children: projects.map(({ project , date , descriptions  }, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexRowBetween,
                            marginTop: spacing[0.5]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                bold: true,
                                children: project
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFText, {
                                children: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexCol,
                            marginTop: spacing[0.5]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFBulletList, {
                            items: descriptions
                        })
                    })
                ]
            }, idx))
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFSkills.tsx




const ResumePDFSkills = ({ heading , skills , themeColor , showBulletPoints  })=>{
    const { descriptions , featuredSkills  } = skills;
    const featuredSkillsWithText = featuredSkills.filter((item)=>item.skill);
    const featuredSkillsPair = [
        [
            featuredSkillsWithText[0],
            featuredSkillsWithText[3]
        ],
        [
            featuredSkillsWithText[1],
            featuredSkillsWithText[4]
        ],
        [
            featuredSkillsWithText[2],
            featuredSkillsWithText[5]
        ]
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ResumePDFSection, {
        themeColor: themeColor,
        heading: heading,
        children: [
            featuredSkillsWithText.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                style: {
                    ...styles.flexRowBetween,
                    marginTop: spacing[0.5]
                },
                children: featuredSkillsPair.map((pair, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                        style: {
                            ...styles.flexCol
                        },
                        children: pair.map((featuredSkill, idx)=>{
                            if (!featuredSkill) return null;
                            return /*#__PURE__*/ jsx_runtime_.jsx(ResumeFeaturedSkill, {
                                skill: featuredSkill.skill,
                                rating: featuredSkill.rating,
                                themeColor: themeColor,
                                style: {
                                    justifyContent: "flex-end"
                                }
                            }, idx);
                        })
                    }, idx))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                style: {
                    ...styles.flexCol
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFBulletList, {
                    items: descriptions,
                    showBulletPoints: showBulletPoints
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/ResumePDFCustom.tsx




const ResumePDFCustom = ({ heading , custom , themeColor , showBulletPoints  })=>{
    const { descriptions  } = custom;
    return /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFSection, {
        themeColor: themeColor,
        heading: heading,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
            style: {
                ...styles.flexCol
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFBulletList, {
                items: descriptions,
                showBulletPoints: showBulletPoints
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/common/SuppressResumePDFErrorMessage.tsx
/* __next_internal_client_entry_do_not_use__ SuppressResumePDFErrorMessage auto */ 
/**
 * Suppress ResumePDF development errors.
 * See ResumePDF doc string for context.
 */ if (false) {}
const SuppressResumePDFErrorMessage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

;// CONCATENATED MODULE: ./src/app/components/Resume/ResumePDF/index.tsx











/**
 * Note: ResumePDF is supposed to be rendered inside PDFViewer. However,
 * PDFViewer is rendered too slow and has noticeable delay as you enter
 * the resume form, so we render it without PDFViewer to make it render
 * instantly. There are 2 drawbacks with this approach:
 * 1. Not everything works out of box if not rendered inside PDFViewer,
 *    e.g. svg doesn't work, so it takes in a isPDF flag that maps react
 *    pdf element to the correct dom element.
 * 2. It throws a lot of errors in console log, e.g. "<VIEW /> is using incorrect
 *    casing. Use PascalCase for React components, or lowercase for HTML elements."
 *    in development, causing a lot of noises. We can possibly workaround this by
 *    mapping every react pdf element to a dom element, but for now, we simply
 *    suppress these messages in <SuppressResumePDFErrorMessage />.
 *    https://github.com/diegomura/react-pdf/issues/239#issuecomment-487255027
 */ const ResumePDF = ({ resume , settings , isPDF =false  })=>{
    const { profile , workExperiences , educations , projects , skills , custom  } = resume;
    const { name  } = profile;
    const { fontFamily , fontSize , documentSize , formToHeading , formToShow , formsOrder , showBulletPoints  } = settings;
    const themeColor = settings.themeColor || settingsSlice/* DEFAULT_FONT_COLOR */.xw;
    const showFormsOrder = formsOrder.filter((form)=>formToShow[form]);
    const formTypeToComponent = {
        workExperiences: ()=>/*#__PURE__*/ jsx_runtime_.jsx(ResumePDFWorkExperience, {
                heading: formToHeading["workExperiences"],
                workExperiences: workExperiences,
                themeColor: themeColor
            }),
        educations: ()=>/*#__PURE__*/ jsx_runtime_.jsx(ResumePDFEducation, {
                heading: formToHeading["educations"],
                educations: educations,
                themeColor: themeColor,
                showBulletPoints: showBulletPoints["educations"]
            }),
        projects: ()=>/*#__PURE__*/ jsx_runtime_.jsx(ResumePDFProject, {
                heading: formToHeading["projects"],
                projects: projects,
                themeColor: themeColor
            }),
        skills: ()=>/*#__PURE__*/ jsx_runtime_.jsx(ResumePDFSkills, {
                heading: formToHeading["skills"],
                skills: skills,
                themeColor: themeColor,
                showBulletPoints: showBulletPoints["skills"]
            }),
        custom: ()=>/*#__PURE__*/ jsx_runtime_.jsx(ResumePDFCustom, {
                heading: formToHeading["custom"],
                custom: custom,
                themeColor: themeColor,
                showBulletPoints: showBulletPoints["custom"]
            })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Document, {
                title: `${name} Resume`,
                author: name,
                producer: "OpenResume",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.Page, {
                    size: documentSize === "A4" ? "A4" : "LETTER",
                    style: {
                        ...styles.flexCol,
                        color: settingsSlice/* DEFAULT_FONT_COLOR */.xw,
                        fontFamily,
                        fontSize: fontSize + "pt"
                    },
                    children: [
                        Boolean(settings.themeColor) && /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                            style: {
                                width: spacing.full,
                                height: spacing[3.5],
                                backgroundColor: themeColor
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: {
                                ...styles.flexCol,
                                padding: `${spacing[0]} ${spacing[20]}`
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ResumePDFProfile, {
                                    profile: profile,
                                    themeColor: themeColor,
                                    isPDF: isPDF
                                }),
                                showFormsOrder.map((form)=>{
                                    const Component = formTypeToComponent[form];
                                    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {}, form);
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SuppressResumePDFErrorMessage, {})
        ]
    });
};


/***/ }),

/***/ 4922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A8": () => (/* binding */ FONT_FAMILY_TO_STANDARD_SIZE_IN_PT),
/* harmony export */   "JL": () => (/* binding */ ENGLISH_FONT_FAMILIES),
/* harmony export */   "rS": () => (/* binding */ NON_ENGLISH_FONT_FAMILY_TO_LANGUAGE),
/* harmony export */   "u9": () => (/* binding */ FONT_FAMILY_TO_DISPLAY_NAME),
/* harmony export */   "zZ": () => (/* binding */ NON_ENGLISH_FONT_FAMILIES)
/* harmony export */ });
/**
 * Adding a new font family involves 4 steps:
 * Step 1. Add it to one of the below FONT_FAMILIES variable array:
 *         English fonts -> SANS_SERIF_ENGLISH_FONT_FAMILIES or SERIF_ENGLISH_FONT_FAMILIES
 *         Non-English fonts -> NON_ENGLISH_FONT_FAMILIES
 *         Once the font is added, it would take care of
 *         a. Registering font family for React PDF at "components/fonts/hooks.tsx"
 *         b. Loading font family for React PDF iframe at "components/Resume/ResumeIFrame.tsx"
 *         c. Adding font family selection to Resume Settings at "components/ResumeForm/ThemeForm/Selection.tsx"
 * Step 2. To load css correctly for the Resume Form:
 *         English fonts -> add it to the "public\fonts\fonts.css" file
 *         Non-English fonts -> create/update "public\fonts\fonts-<language>.css" and update "components/fonts/NonEnglishFontsCSSLazyLoader.tsx"
 * Step 3. Update FONT_FAMILY_TO_STANDARD_SIZE_IN_PT and FONT_FAMILY_TO_DISPLAY_NAME accordingly
 * Step 4. Update "public/fonts/OFL.txt" to include the new font family and credit the font creator
 *
 * IMPORTANT NOTE:
 * One major problem with adding a new font family is that most font family doesn't work with
 * React PDF out of box. The texts would appear fine in the PDF, but copying and pasting them
 * would result in different texts. See issues: https://github.com/diegomura/react-pdf/issues/915
 * and https://github.com/diegomura/react-pdf/issues/629
 *
 * A solution to this problem is to import and re-export the font with a font editor, e.g. fontforge or birdfont.
 *
 * If using fontforge, the following command can be used to export the font:
 * ./fontforge -lang=ff -c 'Open($1); Generate($2); Close();' old_font.ttf new_font.ttf
 * Note that fontforge doesn't work on non-english fonts: https://github.com/fontforge/fontforge/issues/1534
 * Also, some fonts might still not work after re-export.
 */ const SANS_SERIF_ENGLISH_FONT_FAMILIES = [
    "Roboto",
    "Lato",
    "Montserrat",
    "OpenSans",
    "Raleway"
];
const SERIF_ENGLISH_FONT_FAMILIES = [
    "Caladea",
    "Lora",
    "RobotoSlab",
    "PlayfairDisplay",
    "Merriweather"
];
const ENGLISH_FONT_FAMILIES = [
    ...SANS_SERIF_ENGLISH_FONT_FAMILIES,
    ...SERIF_ENGLISH_FONT_FAMILIES
];
const NON_ENGLISH_FONT_FAMILIES = [
    "NotoSansSC"
];
const NON_ENGLISH_FONT_FAMILY_TO_LANGUAGE = {
    NotoSansSC: [
        "zh",
        "zh-CN",
        "zh-TW"
    ]
};
const FONT_FAMILY_TO_STANDARD_SIZE_IN_PT = {
    // Sans Serif Fonts
    Roboto: 11,
    Lato: 11,
    Montserrat: 10,
    OpenSans: 10,
    Raleway: 10,
    // Serif Fonts
    Caladea: 11,
    Lora: 11,
    RobotoSlab: 10,
    PlayfairDisplay: 10,
    Merriweather: 10,
    // Non-English Fonts
    NotoSansSC: 11
};
const FONT_FAMILY_TO_DISPLAY_NAME = {
    // Sans Serif Fonts
    Roboto: "Roboto",
    Lato: "Lato",
    Montserrat: "Montserrat",
    OpenSans: "Open Sans",
    Raleway: "Raleway",
    // Serif Fonts
    Caladea: "Caladea",
    Lora: "Lora",
    RobotoSlab: "Roboto Slab",
    PlayfairDisplay: "Playfair Display",
    Merriweather: "Merriweather",
    // Non-English Fonts
    NotoSansSC: "思源黑体(简体)"
};


/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getAllFontFamiliesToLoad)
/* harmony export */ });
/* harmony import */ var components_fonts_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4922);
/* __next_internal_client_entry_do_not_use__ getAllFontFamiliesToLoad auto */ 
/**
 * getPreferredNonEnglishFontFamilies returns non-english font families that are included in
 * user's preferred languages. This is to avoid loading fonts/languages that users won't use.
 */ const getPreferredNonEnglishFontFamilies = ()=>{
    return components_fonts_constants__WEBPACK_IMPORTED_MODULE_0__/* .NON_ENGLISH_FONT_FAMILIES.filter */ .zZ.filter((fontFamily)=>{
        const fontLanguages = components_fonts_constants__WEBPACK_IMPORTED_MODULE_0__/* .NON_ENGLISH_FONT_FAMILY_TO_LANGUAGE */ .rS[fontFamily];
        const userPreferredLanguages = navigator.languages ?? [
            navigator.language
        ];
        return userPreferredLanguages.some((preferredLanguage)=>fontLanguages.includes(preferredLanguage));
    });
};
const getAllFontFamiliesToLoad = ()=>{
    return [
        ...components_fonts_constants__WEBPACK_IMPORTED_MODULE_0__/* .ENGLISH_FONT_FAMILIES */ .JL,
        ...getPreferredNonEnglishFontFamilies()
    ];
};


/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$U": () => (/* binding */ PX_PER_PT),
/* harmony export */   "BE": () => (/* binding */ DEBUG_RESUME_PDF_FLAG),
/* harmony export */   "BF": () => (/* binding */ A4_WIDTH_PT),
/* harmony export */   "J2": () => (/* binding */ LETTER_HEIGHT_PX),
/* harmony export */   "Zs": () => (/* binding */ A4_WIDTH_PX),
/* harmony export */   "iL": () => (/* binding */ LETTER_WIDTH_PX),
/* harmony export */   "qA": () => (/* binding */ A4_HEIGHT_PX),
/* harmony export */   "wG": () => (/* binding */ LETTER_WIDTH_PT)
/* harmony export */ });
const PX_PER_PT = 4 / 3;
// Reference: https://www.prepressure.com/library/paper-size/letter
// Letter size is commonly used in US & Canada, while A4 is the standard for rest of world.
const LETTER_WIDTH_PT = 612;
const LETTER_HEIGHT_PT = 792;
const LETTER_WIDTH_PX = LETTER_WIDTH_PT * PX_PER_PT;
const LETTER_HEIGHT_PX = LETTER_HEIGHT_PT * PX_PER_PT;
// Reference: https://www.prepressure.com/library/paper-size/din-a4
const A4_WIDTH_PT = 595;
const A4_HEIGHT_PT = 842;
const A4_WIDTH_PX = A4_WIDTH_PT * PX_PER_PT;
const A4_HEIGHT_PX = A4_HEIGHT_PT * PX_PER_PT;
const DEBUG_RESUME_PDF_FLAG = undefined; // use undefined to disable to deal with a weird error message


/***/ })

};
;