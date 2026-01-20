exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 3204:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8146));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5900))

/***/ }),

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavBar": () => (/* binding */ TopNavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_cx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3619);
/* __next_internal_client_entry_do_not_use__ TopNavBar auto */ 



const TopNavBar = ()=>{
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const isHomePage = pathName === "/";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        "aria-label": "Site Header",
        className: (0,lib_cx__WEBPACK_IMPORTED_MODULE_3__.cx)("flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12", isHomePage && "bg-dot"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-10 w-full items-center justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center gap-1 transition-transform duration-200 hover:scale-105",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "SmartCV"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    "aria-label": "Site Nav Bar",
                    className: "flex items-center gap-2 text-sm font-medium",
                    children: [
                        [
                            "/resume-builder",
                            "Builder"
                        ],
                        [
                            "https://github.com/Saurav6200907210/SmartCV-Resume",
                            "GitHub"
                        ]
                    ].map(([href, text])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "rounded-md px-1.5 py-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus-visible:bg-gray-100 lg:px-4",
                            href: href,
                            children: text
                        }, text))
                })
            ]
        })
    });
};


/***/ }),

/***/ 3619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cx": () => (/* binding */ cx)
/* harmony export */ });
/**
 * cx is a simple util to join classNames together. Think of it as a simplified version of the open source classnames util
 * Reference: https://dev.to/gugaguichard/replace-clsx-classnames-or-classcat-with-your-own-little-helper-3bf
 *
 * @example
 * cx('px-1', 'mt-2'); // => 'px-1 mt-2'
 * cx('px-1', true && 'mt-2'); // => 'px-1 mt-2'
 * cx('px-1', false && 'mt-2'); // => 'px-1'
 */ const cx = (...classes)=>{
    const newClasses = [];
    for (const c of classes){
        if (typeof c === "string") {
            newClasses.push(c.trim());
        }
    }
    return newClasses.join(" ");
};


/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dp": () => (/* binding */ selectResume),
/* harmony export */   "Dv": () => (/* binding */ changeWorkExperiences),
/* harmony export */   "Ml": () => (/* binding */ initialResumeState),
/* harmony export */   "NR": () => (/* binding */ changeProjects),
/* harmony export */   "O3": () => (/* binding */ initialWorkExperience),
/* harmony export */   "Ue": () => (/* binding */ addSectionInForm),
/* harmony export */   "WY": () => (/* binding */ changeProfile),
/* harmony export */   "Wi": () => (/* binding */ changeSkills),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_I": () => (/* binding */ selectProjects),
/* harmony export */   "b2": () => (/* binding */ selectWorkExperiences),
/* harmony export */   "bh": () => (/* binding */ selectEducations),
/* harmony export */   "c1": () => (/* binding */ initialProfile),
/* harmony export */   "cS": () => (/* binding */ initialEducation),
/* harmony export */   "fx": () => (/* binding */ moveSectionInForm),
/* harmony export */   "gY": () => (/* binding */ selectCustom),
/* harmony export */   "hR": () => (/* binding */ deleteSectionInFormByIdx),
/* harmony export */   "im": () => (/* binding */ setResume),
/* harmony export */   "n_": () => (/* binding */ initialProject),
/* harmony export */   "oc": () => (/* binding */ initialFeaturedSkills),
/* harmony export */   "q1": () => (/* binding */ changeEducations),
/* harmony export */   "sf": () => (/* binding */ selectSkills),
/* harmony export */   "tM": () => (/* binding */ selectProfile),
/* harmony export */   "xx": () => (/* binding */ changeCustom)
/* harmony export */ });
/* unused harmony exports initialFeaturedSkill, initialSkills, initialCustom, resumeSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialProfile = {
    name: "",
    summary: "",
    email: "",
    phone: "",
    location: "",
    url: ""
};
const initialWorkExperience = {
    company: "",
    jobTitle: "",
    date: "",
    descriptions: []
};
const initialEducation = {
    school: "",
    degree: "",
    gpa: "",
    date: "",
    descriptions: []
};
const initialProject = {
    project: "",
    date: "",
    descriptions: []
};
const initialFeaturedSkill = {
    skill: "",
    rating: 4
};
const initialFeaturedSkills = Array(6).fill({
    ...initialFeaturedSkill
});
const initialSkills = {
    featuredSkills: initialFeaturedSkills,
    descriptions: []
};
const initialCustom = {
    descriptions: []
};
const initialResumeState = {
    profile: initialProfile,
    workExperiences: [
        initialWorkExperience
    ],
    educations: [
        initialEducation
    ],
    projects: [
        initialProject
    ],
    skills: initialSkills,
    custom: initialCustom
};
const resumeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "resume",
    initialState: initialResumeState,
    reducers: {
        changeProfile: (draft, action)=>{
            const { field , value  } = action.payload;
            draft.profile[field] = value;
        },
        changeWorkExperiences: (draft, action)=>{
            const { idx , field , value  } = action.payload;
            const workExperience = draft.workExperiences[idx];
            workExperience[field] = value;
        },
        changeEducations: (draft, action)=>{
            const { idx , field , value  } = action.payload;
            const education = draft.educations[idx];
            education[field] = value;
        },
        changeProjects: (draft, action)=>{
            const { idx , field , value  } = action.payload;
            const project = draft.projects[idx];
            project[field] = value;
        },
        changeSkills: (draft, action)=>{
            const { field  } = action.payload;
            if (field === "descriptions") {
                const { value  } = action.payload;
                draft.skills.descriptions = value;
            } else {
                const { idx , skill , rating  } = action.payload;
                const featuredSkill = draft.skills.featuredSkills[idx];
                featuredSkill.skill = skill;
                featuredSkill.rating = rating;
            }
        },
        changeCustom: (draft, action)=>{
            const { value  } = action.payload;
            draft.custom.descriptions = value;
        },
        addSectionInForm: (draft, action)=>{
            const { form  } = action.payload;
            switch(form){
                case "workExperiences":
                    {
                        draft.workExperiences.push(structuredClone(initialWorkExperience));
                        return draft;
                    }
                case "educations":
                    {
                        draft.educations.push(structuredClone(initialEducation));
                        return draft;
                    }
                case "projects":
                    {
                        draft.projects.push(structuredClone(initialProject));
                        return draft;
                    }
            }
        },
        moveSectionInForm: (draft, action)=>{
            const { form , idx , direction  } = action.payload;
            if (form !== "skills" && form !== "custom") {
                if (idx === 0 && direction === "up" || idx === draft[form].length - 1 && direction === "down") {
                    return draft;
                }
                const section = draft[form][idx];
                if (direction === "up") {
                    draft[form][idx] = draft[form][idx - 1];
                    draft[form][idx - 1] = section;
                } else {
                    draft[form][idx] = draft[form][idx + 1];
                    draft[form][idx + 1] = section;
                }
            }
        },
        deleteSectionInFormByIdx: (draft, action)=>{
            const { form , idx  } = action.payload;
            if (form !== "skills" && form !== "custom") {
                draft[form].splice(idx, 1);
            }
        },
        setResume: (draft, action)=>{
            return action.payload;
        }
    }
});
const { changeProfile , changeWorkExperiences , changeEducations , changeProjects , changeSkills , changeCustom , addSectionInForm , moveSectionInForm , deleteSectionInFormByIdx , setResume  } = resumeSlice.actions;
const selectResume = (state)=>state.resume;
const selectProfile = (state)=>state.resume.profile;
const selectWorkExperiences = (state)=>state.resume.workExperiences;
const selectEducations = (state)=>state.resume.educations;
const selectProjects = (state)=>state.resume.projects;
const selectSkills = (state)=>state.resume.skills;
const selectCustom = (state)=>state.resume.custom;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resumeSlice.reducer);


/***/ }),

/***/ 522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ selectShowBulletPoints),
/* harmony export */   "DF": () => (/* binding */ initialSettings),
/* harmony export */   "De": () => (/* binding */ selectIsFirstForm),
/* harmony export */   "Dy": () => (/* binding */ changeSettings),
/* harmony export */   "I2": () => (/* binding */ setSettings),
/* harmony export */   "Lk": () => (/* binding */ changeFormOrder),
/* harmony export */   "ON": () => (/* binding */ changeFormHeading),
/* harmony export */   "V1": () => (/* binding */ changeShowBulletPoints),
/* harmony export */   "Yy": () => (/* binding */ selectIsLastForm),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_S": () => (/* binding */ selectThemeColor),
/* harmony export */   "cd": () => (/* binding */ selectFormsOrder),
/* harmony export */   "e": () => (/* binding */ DEFAULT_THEME_COLOR),
/* harmony export */   "hs": () => (/* binding */ selectHeadingByForm),
/* harmony export */   "vi": () => (/* binding */ selectSettings),
/* harmony export */   "wo": () => (/* binding */ selectShowByForm),
/* harmony export */   "xw": () => (/* binding */ DEFAULT_FONT_COLOR),
/* harmony export */   "z5": () => (/* binding */ changeShowForm)
/* harmony export */ });
/* unused harmony exports DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE, settingsSlice, selectFormToShow, selectFormToHeading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_THEME_COLOR = "#38bdf8"; // sky-400
const DEFAULT_FONT_FAMILY = "Roboto";
const DEFAULT_FONT_SIZE = "11"; // text-base https://tailwindcss.com/docs/font-size
const DEFAULT_FONT_COLOR = "#171717"; // text-neutral-800
const initialSettings = {
    themeColor: DEFAULT_THEME_COLOR,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    documentSize: "Letter",
    formToShow: {
        workExperiences: true,
        educations: true,
        projects: true,
        skills: true,
        custom: false
    },
    formToHeading: {
        workExperiences: "WORK EXPERIENCE",
        educations: "EDUCATION",
        projects: "PROJECT",
        skills: "SKILLS",
        custom: "CUSTOM SECTION"
    },
    formsOrder: [
        "workExperiences",
        "educations",
        "projects",
        "skills",
        "custom"
    ],
    showBulletPoints: {
        educations: true,
        projects: true,
        skills: true,
        custom: true
    }
};
const settingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "settings",
    initialState: initialSettings,
    reducers: {
        changeSettings: (draft, action)=>{
            const { field , value  } = action.payload;
            draft[field] = value;
        },
        changeShowForm: (draft, action)=>{
            const { field , value  } = action.payload;
            draft.formToShow[field] = value;
        },
        changeFormHeading: (draft, action)=>{
            const { field , value  } = action.payload;
            draft.formToHeading[field] = value;
        },
        changeFormOrder: (draft, action)=>{
            const { form , type  } = action.payload;
            const lastIdx = draft.formsOrder.length - 1;
            const pos = draft.formsOrder.indexOf(form);
            const newPos = type === "up" ? pos - 1 : pos + 1;
            const swapFormOrder = (idx1, idx2)=>{
                const temp = draft.formsOrder[idx1];
                draft.formsOrder[idx1] = draft.formsOrder[idx2];
                draft.formsOrder[idx2] = temp;
            };
            if (newPos >= 0 && newPos <= lastIdx) {
                swapFormOrder(pos, newPos);
            }
        },
        changeShowBulletPoints: (draft, action)=>{
            const { field , value  } = action.payload;
            draft["showBulletPoints"][field] = value;
        },
        setSettings: (draft, action)=>{
            return action.payload;
        }
    }
});
const { changeSettings , changeShowForm , changeFormHeading , changeFormOrder , changeShowBulletPoints , setSettings  } = settingsSlice.actions;
const selectSettings = (state)=>state.settings;
const selectThemeColor = (state)=>state.settings.themeColor;
const selectFormToShow = (state)=>state.settings.formToShow;
const selectShowByForm = (form)=>(state)=>state.settings.formToShow[form];
const selectFormToHeading = (state)=>state.settings.formToHeading;
const selectHeadingByForm = (form)=>(state)=>state.settings.formToHeading[form];
const selectFormsOrder = (state)=>state.settings.formsOrder;
const selectIsFirstForm = (form)=>(state)=>state.settings.formsOrder[0] === form;
const selectIsLastForm = (form)=>(state)=>state.settings.formsOrder[state.settings.formsOrder.length - 1] === form;
const selectShowBulletPoints = (form)=>(state)=>state.settings.showBulletPoints[form];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsSlice.reducer);


/***/ }),

/***/ 5774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/app/components/TopNavBar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\saura\Downloads\SmartCV-Resume-main\SmartCV-Resume-main\src\app\components\TopNavBar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["TopNavBar"];

;// CONCATENATED MODULE: ./src/app/components/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-gray-50 py-8 text-center text-sm text-gray-500",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "transition-colors duration-200 hover:text-gray-900",
                children: [
                    "Made with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animate-pulse text-red-500",
                        children: "❤️"
                    }),
                    " by Saurav Kumar"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 transition-colors duration-200 hover:text-gray-900",
                children: "\xa9 2025 Saurav Kumar. All rights reserved"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(4372);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "SmartCV - Free Open-source Resume Builder",
    description: "SmartCV is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps."
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.cp, {})
            ]
        })
    });
}


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;