import React from 'react';
import { Code, Github, ExternalLink, Brain, Database } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'HUMAN FEELINGS IMAGES CLASSIFICATION USING DEEP LEARNING',
    description: 'A sophisticated deep learning application that uses advanced neural networks to classify human emotions from facial expressions in images. This project demonstrates the power of artificial intelligence in understanding human behavior and emotions.',
    longDescription: 'This project implements a comprehensive emotion recognition system using state-of-the-art deep learning techniques. The system can accurately identify and classify various human emotions including happiness, sadness, anger, fear, surprise, and disgust from facial images.',
    technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'OpenCV', 'NumPy', 'Matplotlib'],
    features: [
      'Real-time emotion detection from images',
      'Multi-class emotion classification',
      'High accuracy neural network model',
      'Preprocessing pipeline for image data',
      'Model performance visualization',
      'Scalable architecture for deployment'
    ],
    github: 'https://github.com/sanjeev-kumar/emotion-classification',
    // demo: 'https://emotion-classifier-demo.vercel.app'
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="glass-card p-8 project-card">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-6">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-enhanced-primary mb-2">{project.title}</h3>
              <p className="text-enhanced-body font-semibold">{project.description}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Project Overview</h4>
                <p className="text-enhanced-body leading-relaxed font-medium">{project.longDescription}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-enhanced-body">
                      <Code className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="glass-button-primary group">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View on GitHub
                </button>
                <button className="glass-button-secondary group">
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Technologies Used</h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                      <Database className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-enhanced-body text-sm font-semibold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card-inner p-6">
                <h4 className="text-lg font-bold text-enhanced-secondary mb-3">Project Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-enhanced-muted font-semibold">Accuracy Rate</span>
                    <span className="text-xl font-bold text-green-400">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-enhanced-muted font-semibold">Model Size</span>
                    <span className="text-xl font-bold text-blue-400">12MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-enhanced-muted font-semibold">Processing Time</span>
                    <span className="text-xl font-bold text-purple-400">0.3s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;