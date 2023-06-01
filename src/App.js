import "./App.css";

import Home from "./home";
import { Routes, Route } from "react-router-dom";
import AnimalPageContainer from "./container/AnimalPageContainer";
import AnimalDetailPageContainer from "./container/AnimalDetailPageContainer";
import FormPageContainer from "./container/FormPageContainner";
import ContactPage from "./components/ContactPage";
import ReadArticleContainer from "./container/ReadArticleContainer";
import CreateArticleContainer from "./container/CreateArticleContainer";
import DeleteArticleContainer from "./container/DeleteArticleContainer";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/animal-page" exact element={<AnimalPageContainer />} />
      <Route path="animal/:id" exact element={<AnimalDetailPageContainer />} />
      <Route path="/form" exact element={<FormPageContainer />} />
      <Route path="/contact-app" exact element={<ContactPage />} />
      <Route path="/read-article" exact element={<ReadArticleContainer />} />
      <Route
        path="/create-article"
        exact
        element={<CreateArticleContainer />}
      />
      <Route
        path="/delete-article"
        exact
        element={<DeleteArticleContainer />}
      />
    </Routes>
  );
}

export default App;
