import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Perfex-login";
import ForgotPassword from "./Forgetpassword";
import PerfexHome from "./PerfexHome";
import AdminDashboard from "./AdminDashboard";
import Admin from "./Practice";
import ShowData from "./ShowIcon";
import UsersDetails from "./UsersDetails";
import UpdatePage from "./UpdatePage";
import ShowData1 from "./ShowInstitutes";
import BatchYear from "./Batch-Year";
import Batches from "./Batches";
import UpdateYear from "./Batch-Year-Up";
import UpdateBatch from "./Batch-Update";
import SearchOption from "./SearchUser";
import Dashboard from "./Perfex_Dashboard";
import Footer from "./FooterSkill";

import Institute from "./Institute";
import RecentAssessment from "./Recent-Assessment";
import RecentCourses from "./RecentCourses";
import RecentPractice from "./RecentPractice";
import Assessment from "./Assessments-User";
import Courses from "./Courses-Users";
import Practice from "./Practice-User";
import Blogs from "./Blogs-Users";
import JavaProgramming from "./Java-Programming";
import InstituteLogin from "./Institute-Login";
import LearnPath from "./LearnData/Learn-Path";
import VideoFolderUpdatePage from "./LearnData/VideoUpdatePage";
import VideoPage from "./LearnData/VideosPage";
import Learn from "./LearnData/Learn";
import Learning from "./LearnData/Learning";
import Topic from "./LearnData/topic";
import Content from "./LearnData/content";
import TextContent from "./LearnData/textcontent";
import QbSubject from '../src/Questionbank/subject';
import Chapter from '../src/Questionbank/chapter';
import CreateQuestion from '../src/Questionbank/CreateQuestion';
import McqView from '../src/Questionbank/McqView';
import ParagHome from '../src/Questionbank/ParagHome';
import ParagView from '../src/Questionbank/paragview';
import Coding from '../src/Questionbank/coding';
import Codingview from '../src/Questionbank/codingview';
import Upload from "./Questionbank/upload";
import ParagEdit from "./Questionbank/paragEdit";
import Basic from './Questionbank/BasicCoding';
import ParticularMcaView from './Questionbank/ParticularMcaView';
import Mcqupdate from './Questionbank/Mcqupdate';
import AssignQB from "./Questionbank/AssignQB";
import Codingupdate from "./Questionbank/codingupdate";





function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/PerfexHome" element={<PerfexHome />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/UsersDetails" element={<UsersDetails />} />
        <Route exact path="/ShowData/:id" element={<ShowData />} />
        <Route exact path="/UpdatePage/:id" element={<UpdatePage />} />
        <Route exact path="/ShowData1/:id" element={<ShowData1 />} />
        <Route exact path="/Institute" element={<Institute />} />
        <Route exact path="/BatchYear" element={<BatchYear />} />
        <Route exact path="/Batches" element={<Batches />} />
        <Route exact path="/UpdateYear/:id" element={<UpdateYear />} />
        <Route exact path="/UpdateBatch/:id" element={<UpdateBatch />} />
        <Route exact path="/SearchOption" element={<SearchOption />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route exact path="/RecentAssessment" element={<RecentAssessment />} />
        <Route exact path="/RecentCourses" element={<RecentCourses />} />
        <Route exact path="/RecentPractice" element={<RecentPractice />} />
        <Route exact path="/Assessment" element={<Assessment />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route exact path="/Practice" element={<Practice />} />
        <Route exact path="/Blogs" element={<Blogs />} />
        <Route exact path="/JavaProgramming" element={<JavaProgramming />} />
        <Route exact path="/InstituteLogin" element={<InstituteLogin />} />
        <Route exact path="/LearnPath" element={<LearnPath />} />
        <Route exact path="/Learn" element={<Learn />} />
        <Route exact path="/Learning" element={<Learning />} />
        <Route exact path="/topic" element={<Topic />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/textcontent" element={<TextContent />} />
        <Route exact path="/QbSubject" element={<QbSubject />} />
        <Route exact path="/Chapter" element={<Chapter />} />
        <Route exact path="/CreateQuestion" element={<CreateQuestion />} />
        <Route exact path="/McqView" element={<McqView />} />
        <Route exact path="/ParagHome" element={<ParagHome />} />
        <Route exact path="/ParagView" element={<ParagView />} />
        <Route exact path="/Coding" element={<Coding />} />
        <Route exact path="/Codingview" element={<Codingview />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/ParagEdit" element={<ParagEdit />} />
        <Route exact path="/Basic" element={<Basic />} />        
        <Route exact path="/ParticularMcaView" element={<ParticularMcaView />} />  
        <Route exact path="/Mcqupdate" element={<Mcqupdate />} /> 
				<Route exact path="/AssignQB" element={<AssignQB />} />
				<Route exact path="/codingupdate" element={<Codingupdate />} />
        <Route
          exact
          path="/VideoPage/:VideofolderName"
          element={<VideoPage />}
        />
        <Route
          exact
          path="/VideoFolderUpdatePage/:id"
          element={<VideoFolderUpdatePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
