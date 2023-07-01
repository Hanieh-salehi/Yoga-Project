import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ClassesSection from "./components/ClassesSection";
import TeamSection from "./components/TeamSection";
import PriceSection from "./components/PriceSection";
import QuestionSection from "./components/QuestionSection";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainSection/>
        <ClassesSection/>
        <TeamSection/>
        <PriceSection/>
        <QuestionSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
