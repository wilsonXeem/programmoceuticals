import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/CourseThemes.css";
import Homepage from "./components/Homepage";
import Course from "./components/Course";
import CourseDetail from "./components/CourseDetail";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Challenge from "./components/Challenge";
import ChallengeLanding from "./components/ChallengeLanding";
import CurriculumPage from "./components/CurriculumPage";
import CoursesPage from "./components/CoursesPage";
import TimetablePage from "./components/TimetablePage";
import PricingPage from "./components/PricingPage";
import CourseOutlinePage from "./components/CourseOutlinePage";
import MyCoursesPage from "./components/MyCoursesPage";
import CertificateVerifyPage from "./components/CertificateVerifyPage";
import { cohortsAPI, coursesAPI } from "./services/api";
import "./styles/Challenge.css";
import "./styles/ChallengeLanding.css";
import { slidesData } from "./data/slidesData";
import { javascriptSlidesData } from "./data/javascriptSlidesData";
import { htmlSlidesData } from "./data/htmlSlidesData";
import { cssSlidesData } from "./data/cssSlidesData";
import { reactSlidesData } from "./data/reactSlidesData";
import { nodejsSlidesData } from "./data/nodejsSlidesData";
import { dsaSlidesData } from "./data/dsaSlidesData";
import { hostingSlidesData } from "./data/hostingSlidesData";
import { djangoSlidesData } from "./data/djangoSlidesData";
import { excelSlidesData } from "./data/excelSlidesData";
import { spssSlidesData } from "./data/spssSlidesData";
import { sqlSlidesData } from "./data/sqlSlidesData";
import { networkingSlidesData } from "./data/networkingSlidesData";
import { mongodbSlidesData } from "./data/mongodbSlidesData";
import { angularjsSlidesData } from "./data/angularjsSlidesData";
import { courses as localCourses } from "./data/courses";

const localCourseMap = new Map(localCourses.map((course) => [course.id, course]));

const mergeCourseCatalog = (apiCourses, hasFullAccess) => {
  if (!Array.isArray(apiCourses) || apiCourses.length === 0) {
    return localCourses.map((course) => ({
      ...course,
      access: {
        previewPercent: 20,
        fullAccessRequiresAuth: true,
        hasFullAccess,
      },
      payment: {
        learning: "free",
        certification: "paid",
        cohortTraining: "paid",
      },
    }));
  }

  const merged = apiCourses.map((apiCourse) => {
    const slug = apiCourse.id || apiCourse.slug;
    const localCourse = localCourseMap.get(slug);
    const previewPercent = Number(apiCourse?.access?.previewPercent) || 20;
    return {
      ...localCourse,
      ...apiCourse,
      id: slug || localCourse?.id,
      slug: slug || apiCourse.slug || localCourse?.id,
      name: apiCourse.name || apiCourse.title || localCourse?.name,
      title: apiCourse.title || apiCourse.name || localCourse?.name,
      icon: localCourse?.icon,
      color: apiCourse.color || localCourse?.color || "#0b5ed7",
      category:
        apiCourse.category || localCourse?.category || "Programming Languages",
      level: apiCourse.level || localCourse?.level || "Beginner",
      duration:
        apiCourse.duration ||
        localCourse?.duration ||
        `${apiCourse.durationWeeks || 12} weeks`,
      objectives:
        apiCourse.objectives?.length > 0
          ? apiCourse.objectives
          : localCourse?.objectives || [],
      outline:
        apiCourse.outline?.length > 0
          ? apiCourse.outline
          : localCourse?.outline || [],
      access: {
        previewPercent,
        fullAccessRequiresAuth: true,
        hasFullAccess,
      },
      payment: {
        learning: "free",
        certification: "paid",
        cohortTraining: "paid",
      },
    };
  });

  const apiIds = new Set(merged.map((course) => course.id));
  const localOnly = localCourses
    .filter((course) => !apiIds.has(course.id))
    .map((course) => ({
      ...course,
      access: {
        previewPercent: 20,
        fullAccessRequiresAuth: true,
        hasFullAccess,
      },
      payment: {
        learning: "free",
        certification: "paid",
        cohortTraining: "paid",
      },
    }));

  return [...merged, ...localOnly];
};

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showHomepage, setShowHomepage] = useState(true);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  const [showChallengeLanding, setShowChallengeLanding] = useState(false);
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showCurriculumPage, setShowCurriculumPage] = useState(false);
  const [challengeId, setChallengeId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState("home");
  const [courseCatalog, setCourseCatalog] = useState(localCourses);
  const [slidesByCourse, setSlidesByCourse] = useState({});

  useEffect(() => {
    // Check for existing token on app load
    const token = localStorage.getItem("token");
    if (token) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser({ name: "User", email: "user@example.com" });
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const url = new URL(window.location.href);
    const searchReference =
      url.searchParams.get("reference") || url.searchParams.get("trxref");

    const hash = String(window.location.hash || "");
    const [hashPath, hashQuery = ""] = hash.split("?");
    const hashParams = new URLSearchParams(hashQuery);
    const hashReference =
      hashParams.get("reference") || hashParams.get("trxref");

    if (!searchReference && !hashReference) {
      return;
    }

    if (url.pathname && url.pathname !== "/" && url.pathname !== "/index.html") {
      const normalized = `/${url.search}${url.hash}`;
      window.history.replaceState({}, "", normalized);
    }

    const hashRoute = hashPath.startsWith("#/") ? hashPath.slice(2) : "";
    if (hashRoute !== "my-courses") {
      window.location.hash = "#/my-courses";
    }
  }, []);

  useEffect(() => {
    const getRouteFromHash = () => {
      const hash = window.location.hash || "#/";
      const path = hash.startsWith("#/") ? hash.slice(2) : "";
      return path || "home";
    };

    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [
    route,
    showHomepage,
    showCourseDetail,
    showChallenge,
    showChallengeLanding,
    showStudentDashboard,
    showAdminDashboard,
    showCurriculumPage,
  ]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const hasFullAccess = Boolean(user?.id);
        const backendCourses = await coursesAPI.list();
        setCourseCatalog(mergeCourseCatalog(backendCourses, hasFullAccess));
      } catch (error) {
        setCourseCatalog(
          mergeCourseCatalog([], Boolean(user?.id))
        );
      }
    };

    loadCourses();
  }, [user]);

  useEffect(() => {
    if (route.startsWith("course/")) {
      const courseId = route.split("/")[1];
      setSelectedLanguage(courseId || null);
      setShowHomepage(false);
      setShowChallenge(false);
      setShowChallengeLanding(false);
      setShowCourseDetail(false);
      setShowCurriculumPage(false);
      setShowStudentDashboard(false);
      setShowAdminDashboard(false);
    }
  }, [route]);

  useEffect(() => {
    const loadSlides = async () => {
      if (!selectedLanguage) {
        return;
      }

      try {
        const response = await coursesAPI.getSlidesBySlug(selectedLanguage);
        setSlidesByCourse((prev) => ({
          ...prev,
          [selectedLanguage]: response,
        }));
      } catch (error) {
        setSlidesByCourse((prev) => ({
          ...prev,
          [selectedLanguage]: null,
        }));
      }
    };

    loadSlides();
  }, [selectedLanguage, user]);

  const handleLanguageSelect = (language) => {
    if (language === "challenge") {
      setShowChallengeLanding(true);
      setShowHomepage(false);
      setShowChallenge(false);
      setShowCourseDetail(false);
      setShowCurriculumPage(false);
    } else if (language === "curriculum") {
      setShowCurriculumPage(true);
      setShowHomepage(false);
      setShowChallenge(false);
      setShowChallengeLanding(false);
      setShowCourseDetail(false);
    } else {
      // Direct access to course content for self-learning
      window.location.hash = `#/course/${language}`;
      setSelectedLanguage(language);
      setShowHomepage(false);
      setShowChallenge(false);
      setShowChallengeLanding(false);
      setShowCourseDetail(false);
      setShowCurriculumPage(false);
    }
  };

  const handleViewCohorts = (language) => {
    // Show cohorts for instructor-led learning
    if (!user) {
      window.location.hash = "#/";
      setShowHomepage(true);
      return;
    }
    const courseData = getCourseData(language);
    setSelectedCourse(courseData);
    setShowCourseDetail(true);
    setShowHomepage(false);
  };

  const getCourseData = (language) => {
    return (
      courseCatalog.find((course) => course.id === language) ||
      courseCatalog[0] ||
      localCourses[0]
    );
  };

  const handleEnrollInCourse = async (cohortId) => {
    const courseId = selectedCourse?.id;
    if (!cohortId || !courseId) {
      return;
    }
    if (user?.id) {
      try {
        await cohortsAPI.enroll(cohortId);
      } catch (error) {
        const message = error?.response?.data?.message || "Enrollment failed.";
        if (!/already enrolled/i.test(message)) {
          alert(message);
          return;
        }
      }
    }
    window.location.hash = `#/course/${courseId}`;
    setSelectedLanguage(courseId);
    setShowCourseDetail(false);
    setShowHomepage(false);
  };

  const handleSelectChallenge = (id) => {
    setChallengeId(id);
    setShowChallenge(true);
    setShowChallengeLanding(false);
  };

  const handleBackToHome = () => {
    window.location.hash = "#/";
    setSelectedLanguage(null);
    setSelectedCourse(null);
    setShowHomepage(true);
    setShowChallenge(false);
    setShowChallengeLanding(false);
    setShowCourseDetail(false);
    setShowCurriculumPage(false);
  };

  const handleBackToChallenges = () => {
    setShowChallenge(false);
    setShowChallengeLanding(true);
  };

  const getCurrentSlidesData = () => {
    const backendSlides = slidesByCourse[selectedLanguage]?.slides;
    if (Array.isArray(backendSlides) && backendSlides.length > 0) {
      return backendSlides;
    }

    switch (selectedLanguage) {
      case "python":
        return slidesData;
      case "javascript":
        return javascriptSlidesData;
      case "html":
        return htmlSlidesData;
      case "css":
        return cssSlidesData;
      case "react":
        return reactSlidesData;
      case "nodejs":
        return nodejsSlidesData;
      case "dsa":
        return dsaSlidesData;
      case "hosting":
        return hostingSlidesData;
      case "django":
        return djangoSlidesData;
      case "excel":
        return excelSlidesData;
      case "spss":
        return spssSlidesData;
      case "sql":
        return sqlSlidesData;
      case "networking":
        return networkingSlidesData;
      case "mongodb":
        return mongodbSlidesData;
      case "angularjs":
        return angularjsSlidesData;
      default:
        return [];
    }
  };

  const getAccessPolicy = (language) => {
    const backendAccess = slidesByCourse[language]?.access;
    if (backendAccess) {
      return {
        previewPercent: Number(backendAccess.previewPercent) || 20,
        hasFullAccess: Boolean(backendAccess.hasFullAccess),
        isPreviewMode: Boolean(backendAccess.isPreviewMode),
        totalSlides: Number(backendAccess.totalSlides) || 0,
      };
    }

    const course = getCourseData(language);
    const previewPercent = Number(course?.access?.previewPercent) || 20;
    const hasFullAccess = Boolean(user?.id);
    const totalSlides = getCurrentSlidesData().length;
    return {
      previewPercent,
      hasFullAccess,
      isPreviewMode: !hasFullAccess,
      totalSlides,
    };
  };

  const getAccessibleSlidesData = () => {
    const fullSlides = getCurrentSlidesData();
    if (!selectedLanguage) {
      return fullSlides;
    }

    const backendAccess = slidesByCourse[selectedLanguage]?.access;
    if (backendAccess) {
      return fullSlides;
    }

    const { isPreviewMode, previewPercent } = getAccessPolicy(selectedLanguage);
    if (!isPreviewMode) {
      return fullSlides;
    }

    const previewCount = Math.max(
      1,
      Math.ceil((previewPercent / 100) * fullSlides.length)
    );
    return fullSlides.slice(0, previewCount);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  if (route === "courses") {
    return <CoursesPage courses={courseCatalog} user={user} />;
  }

  if (route === "certificate-verify" || route.startsWith("certificate-verify/")) {
    const encoded = route.split("/").slice(1).join("/");
    let initialCertificateNumber = encoded;
    try {
      initialCertificateNumber = decodeURIComponent(encoded);
    } catch (error) {
      initialCertificateNumber = encoded;
    }
    return (
      <CertificateVerifyPage initialCertificateNumber={initialCertificateNumber} />
    );
  }

  if (route === "timetable") {
    return <TimetablePage courses={courseCatalog} />;
  }

  if (route === "pricing") {
    return <PricingPage courses={courseCatalog} user={user} />;
  }

  if (route === "my-courses") {
    return (
      <MyCoursesPage
        courses={courseCatalog}
        user={user}
        onBack={() => {
          setShowStudentDashboard(true);
          setShowHomepage(false);
        }}
        onResume={(courseId) => {
          window.location.hash = `#/course/${courseId}`;
        }}
        onUserUpdate={setUser}
      />
    );
  }

  if (route.startsWith("course-outline/")) {
    const courseId = route.split("/")[1];
    return <CourseOutlinePage courseId={courseId} courses={courseCatalog} user={user} />;
  }

  return (
    <div className="App">
      {showCurriculumPage ? (
        <CurriculumPage />
      ) : showHomepage ? (
        <Homepage
          courses={courseCatalog}
          onLanguageSelect={handleLanguageSelect}
          onViewCohorts={handleViewCohorts}
          onViewDashboard={() => {
            if (!user) {
              alert("Please log in to view dashboard");
              return;
            }
            if (user.role === "admin") {
              setShowAdminDashboard(true);
            } else {
              setShowStudentDashboard(true);
            }
            setShowHomepage(false);
          }}
          user={user}
          setUser={setUser}
        />
      ) : showStudentDashboard ? (
        <StudentDashboard
          courses={courseCatalog}
          user={user}
          onContinueCourse={(courseId) => {
            window.location.hash = `#/course/${courseId}`;
            setShowStudentDashboard(false);
          }}
          onBack={handleBackToHome}
          onViewMyCourses={() => {
            window.location.hash = "#/my-courses";
            setShowStudentDashboard(false);
          }}
        />
      ) : showAdminDashboard ? (
        <AdminDashboard user={user} onBack={handleBackToHome} />
      ) : showCourseDetail ? (
        <CourseDetail
          course={selectedCourse}
          user={user}
          onBack={handleBackToHome}
          onEnroll={handleEnrollInCourse}
        />
      ) : showChallengeLanding ? (
        <div>
          <button
            onClick={handleBackToHome}
            style={{
              position: "fixed",
              top: "20px",
              left: "20px",
              zIndex: 1000,
              padding: "10px 15px",
              background: "#0b5ed7",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
          <ChallengeLanding onSelectChallenge={handleSelectChallenge} />
        </div>
      ) : showChallenge ? (
        <Challenge
          challengeId={challengeId}
          language="javascript"
          onBackToChallenges={handleBackToChallenges}
        />
      ) : (
        (() => {
          const fullSlidesData = getCurrentSlidesData();
          const accessibleSlidesData = getAccessibleSlidesData();
          const { isPreviewMode, previewPercent, totalSlides } = getAccessPolicy(
            selectedLanguage
          );

          return (
        <Course
          language={selectedLanguage}
          slidesData={accessibleSlidesData}
          totalCourseSlides={totalSlides || fullSlidesData.length}
          isPreviewMode={isPreviewMode}
          previewPercent={previewPercent}
          onBackToHome={handleBackToHome}
          user={user}
        />
          );
        })()
      )}
    </div>
  );
}

export default App;
