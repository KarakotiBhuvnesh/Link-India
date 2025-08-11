import { Route, Routes } from 'react-router-dom'
import Layout from '@/shared/Layout'
import Home from './Home'
import About from './About'
import Vision from './Vision'
import Purpose from './Purpose'
import Trustees from './Trustees'
import Legal from './Legal'
import Blog from './Blog'
import Post from './Post'
import Events from './Events'
import EventDetail from './EventDetail'
import Membership from './Membership'
import Contact from './Contact'
import NotFound from './NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/legal" element={<Legal />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventDetail />} />

        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
