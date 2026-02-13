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
import { courses } from "./data/courses";

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
    return courses.find((course) => course.id === language) || courses[0];
  };

  const handleEnrollInCourse = (cohortId) => {
    const courseId = selectedCourse?.id;
    if (!cohortId || !courseId) {
      return;
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
    return <CoursesPage />;
  }

  if (route === "timetable") {
    return <TimetablePage />;
  }

  if (route === "pricing") {
    return <PricingPage />;
  }

  if (route === "my-courses") {
    return (
      <MyCoursesPage
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
    return <CourseOutlinePage courseId={courseId} />;
  }

  return (
    <div className="App">
      {showCurriculumPage ? (
        <CurriculumPage />
      ) : showHomepage ? (
        <Homepage
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
        <Course
          language={selectedLanguage}
          slidesData={getCurrentSlidesData()}
          onBackToHome={handleBackToHome}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
