// EDIT CONTENT HERE. All facts come from the CV; add real links only when they exist.
export const profile={name:'Omar Ahmed El-Banna',role:'AI / Machine Learning & Data Science Freelancer',
usp:'I help businesses and teams turn data and real-world problems into practical AI, machine learning, and data-driven solutions.',
email:'Omarahmed38994@gmail.com',phone:'+20 1094230023',phoneTel:'+201094230023',location:'Damanhour, Egypt',linkedin:'https://www.linkedin.com/in/omar-el-banna1'}
export const skills:Record<string,string[]>={
'Programming':['Python','Java','SQL','Object-Oriented Programming','Problem Solving'],
'Machine Learning':['Supervised Learning','Unsupervised Learning','Regression','Classification','Clustering','Feature Engineering','Model Evaluation'],
'Deep Learning':['Neural Networks','TensorFlow','Keras','PyTorch','Transfer Learning'],
'Data Science':['Pandas','NumPy','Matplotlib','Seaborn','Data Cleaning','EDA','Statistics','Linear Algebra'],
'Computer Vision':['OpenCV','Image Processing','OCR','Object Detection','YOLO','Feature Extraction'],
'NLP & Generative AI':['NLP','Text Preprocessing','Embeddings','RAG','Prompt Engineering','Hugging Face'],
'Databases':['SQL','SQLite','PostgreSQL fundamentals','Database Design'],
'Tools & Platforms':['Git','GitHub','Jupyter Notebook','Google Colab','Streamlit','MLflow'],
'Embedded AI':['ESP32','ESP32-CAM','Flutter/GetX']}
export const services=[
{t:'Python Development',d:'Scripts, automation and data tooling in Python.',s:['Python','SQL']},
{t:'Data Analysis & Visualization',d:'Exploratory analysis and clear charts from your data.',s:['Pandas','Matplotlib','Seaborn']},
{t:'Machine Learning Models',d:'Regression and classification projects, from preprocessing to evaluation.',s:['Scikit-learn','XGBoost']},
{t:'Computer Vision Applications',d:'Detection and image-processing prototypes.',s:['OpenCV','YOLO']},
{t:'OCR & Document Analysis',d:'Extract structured information from scanned documents and forms.',s:['OCR','Image Processing']},
{t:'RAG & AI Proof-of-Concepts',d:'Document-retrieval prototypes and small AI proofs of concept.',s:['Embeddings','ChromaDB','Streamlit']}]
export type Project={id:string;title:string;sub:string;status:string;cats:string[];stack:string[];overview:string;objective:string;contribution:string;approach:string;outcome:string;flow:string[];note?:string}
export const filters=['All','Machine Learning','Computer Vision','Generative AI / RAG','Data Science','Document AI']
export const projects:Project[]=[
{id:'fireshield',title:'FireShield',sub:'AI Fire Detection & Response Robot',status:'Implemented project (per CV)',cats:['Computer Vision'],stack:['Python','YOLO','Computer Vision','ESP32','ESP32-CAM','Flutter/GetX'],
overview:'A real-time computer vision system that detects fire and drives physical response hardware.',objective:'Detect fire from a camera feed and trigger an automated response.',
contribution:'Built the YOLO/Python detection pipeline, integrated ESP32 and ESP32-CAM, implemented servo, relay and water-pump control, and developed a Flutter/GetX monitoring and control interface.',
approach:'Camera frames go through a YOLO detection pipeline; results are sent to the ESP32, which actuates the servo, relay and water pump. The Flutter/GetX app monitors and controls the system.',
outcome:'A working integrated system as described in the CV. No accuracy, response-time or safety-certification figures are claimed.',flow:['Camera','Detection Pipeline','ESP32','Control Components','Monitoring Interface']},
{id:'rag',title:'Healthcare RAG',sub:'Emergency Clinical Assistant',status:'Prototype (emergency-support, not diagnostic)',cats:['Generative AI / RAG'],stack:['Python','RAG','Streamlit','ChromaDB','Hugging Face embeddings'],
overview:'A local RAG-based assistant for emergency-support scenarios.',objective:'Support preliminary assessment by retrieving relevant context for patient information, with a doctor in the loop.',
contribution:'Built the Streamlit symptom-intake interface, document loading, chunking, Hugging Face embeddings and ChromaDB storage, and designed the human-in-the-loop review workflow.',
approach:'Documents are chunked and embedded into ChromaDB. Patient information drives retrieval; an ER doctor reviews and confirms the preliminary assessment.',
outcome:'A prototype workflow. It is not an autonomous diagnostic tool and has no clinical validation.',flow:['Patient Information','Document Retrieval','Relevant Context','Preliminary Assessment','Doctor Review']},
{id:'stockvision',title:'StockVision',sub:'Smart ERP Analytics Platform',status:'Concept / partially planned',cats:['Machine Learning','Data Science'],stack:['Python','FastAPI','SQLite','SQLAlchemy','Pandas','Machine Learning'],
overview:'A local business-intelligence concept acting as an analytics layer over ERP/e-Stock data.',objective:'Give businesses sales, inventory and transaction insights from existing ERP data.',
contribution:'Designed the platform concept and planned the FastAPI + SQLite/SQLAlchemy architecture with an analytics/AI engine.',
approach:'ERP data → database layer → FastAPI backend → analytics engine → dashboard. The backend and database architecture are planned; the features are concepts.',
outcome:'No implemented results or real business data are claimed.',flow:['ERP / e-Stock Data','SQLite + SQLAlchemy','FastAPI Backend','Analytics Engine','Dashboard (planned)'],note:'Illustrative sample data'},
{id:'ats',title:'ATS Resume Scanner',sub:'Image Processing Project',status:'Academic/practical project (per CV)',cats:['Document AI'],stack:['Python','Image Processing','OCR'],
overview:'An ATS-style CV analysis project.',objective:'Evaluate resume content and relevance against job requirements.',
contribution:'Applied image preprocessing and text extraction to CV documents and designed the content-evaluation approach.',
approach:'CV image is preprocessed, text extracted with OCR, and the content is analyzed against job requirements.',
outcome:'No claim of real ATS compatibility or verified screening accuracy.',flow:['CV Image','Preprocessing','OCR Extraction','Structured Text','Relevance Analysis']},
{id:'docs',title:'Intelligent Document Analyzer',sub:'& Form Scanner',status:'Academic/practical project (per CV)',cats:['Document AI','Computer Vision'],stack:['Python','OCR','Image Processing'],
overview:'An image-processing solution for scanned documents and forms.',objective:'Extract useful information from scanned documents.',
contribution:'Applied preprocessing and OCR techniques to extract information.',approach:'Scans are cleaned up, passed through OCR, and information is extracted.',
outcome:'Implementation level limited to what the CV states.',flow:['Scanned Document','Image Preprocessing','OCR','Extracted Information']},
{id:'housing',title:'Egypt Housing Price Prediction',sub:'Regression & model comparison',status:'Academic/practical project (per CV)',cats:['Machine Learning','Data Science'],stack:['Python','Pandas','Scikit-learn','XGBoost'],
overview:'Regression models for predicting housing prices.',objective:'Predict prices and compare model families.',
contribution:'Data preprocessing, feature analysis, model training and evaluation; compared Random Forest and XGBoost.',
approach:'Preprocess → feature analysis → train Random Forest and XGBoost → compare using regression metrics.',
outcome:'Project notes record scores of 0.7989 (XGBoost) and 0.7925 (Random Forest). The metric is not stated in the CV, so it is unverified (not confirmed as R²).',flow:['Raw Data','Preprocessing','Feature Analysis','Random Forest vs XGBoost','Evaluation']},
{id:'superstore',title:'Superstore Sales Analysis',sub:'Exploratory data analysis',status:'Academic/practical project (per CV)',cats:['Data Science'],stack:['Python','Pandas','Matplotlib','Seaborn'],
overview:'EDA on sales data.',objective:'Identify sales trends, product performance and business patterns.',
contribution:'Performed the analysis with Pandas and built visualizations with Matplotlib and Seaborn.',approach:'Clean → explore → visualize trends and product comparisons.',
outcome:'Findings are not reproduced on this site.',flow:['Sales Data','Cleaning','EDA','Visualization','Insights']}]
export const education:{t:string;d:string;w:string;n:string;cert?:string}[]=[
{t:'Damanhour University',d:'Faculty of Computers and Information, Bachelor\'s',w:'2023–2027',n:'4th-year student'},
{t:'NTI – Machine Learning for Data Analysis',d:'Digital Egypt Youth Program · 90 technical hours · 30 freelancing hours (coaching only) · Score: 90%',w:'1 May – 12 Jul 2025',n:'Completed',cert:'certificates/nti-ml-data-analysis.jpg'},
{t:'Central Bank of Egypt – Data Science & Machine Learning (AI)',d:'80 hours · 14–25 Sep 2025 · delivered through CLS Learning Solutions',w:'Sep 2025',n:'Completed',cert:'certificates/cbe-data-science-ml.jpg'},
{t:'DEPI – Machine/Data Science Track',d:'Generative AI, ML/DL, NLP, CV, Azure AI, MLOps; working on the capstone project',w:'2026–Present',n:'Ongoing'}]
