---
id: authoring-interactive-data-tools
title: Interactive Data Tools
---

## Hosted web tools

- [ArcGis Online](https://www.arcgis.com/index.html)
- [Google Data Studio](https://datastudio.google.com/u/0/)
- [InsightMaker](https://insightmaker.com/)
- [Radiant](https://shiny.rstudio.com/gallery/radiant.html)
- [HHMI Data Explorer](https://media.hhmi.org/biointeractive/tool/dataexplorer/v1/#/home)
- [Common Online Data Analysis Platform (CODAP)](https://codap.concord.org/)

## &quot;Basic&quot; interactive visualization widgets

### Overview

- **Description** : Suitable for basic data filtering, partitioning, and summarization where the data are fully contained in the widget code but still has the flexibility to dynamically request data from other online sources

- **Difficulty** : Low - Medium

- **Expertise Required** : Basic R and/or JavaScript HTML, CSS

- **Benefits** : Very flexible, native browser support, minimal expertise required

- **Challenges** : More complex interactives will require more expertise to develop

### R (and Python!)

#### [RMarkdown](https://rmarkdown.rstudio.com/)/[Crosstalk](https://rstudio.github.io/crosstalk/index.html)

- [RMarkdown Gallery](https://rmarkdown.rstudio.com/gallery.html)
  - [Example of Data Dashboard using Highcharter HTMLWidget](https://beta.rstudioconnect.com/jjallaire/htmlwidgets-highcharter/htmlwidgets-highcharter.html) (uses [FlexDashboard](https://pkgs.rstudio.com/flexdashboard/) and [Highcharter](https://jkunst.com/highcharter/) HTMLWidgets)
- [HTMLWidgets](http://www.htmlwidgets.org/index.html): How to use JavaScript visualization packages from within R, RMarkdown, and R Shiny (see &quot;Advanced&quot; section below).
  - [HTMLWidgets Gallery](http://www.htmlwidgets.org/showcase_leaflet.html)
  - [Crosstalk](https://rstudio.github.io/crosstalk/index.html) enables HTMLWidgets to communicate with one another
    - [Crosstalk Example](https://rstudio.github.io/crosstalk/) (linking leaflet map with DataTable view)
  - [Highcharter](https://jkunst.com/highcharter/): R HTMLWidget that builds access to [Highcharts](https://www.highcharts.com/) JavaScript visualization package.
    - Some work is being done on accessible visualization. [See here](https://dataand.me/posts/2022-03-09-highcharter-a11y-talk/).
- Note: RMarkdown also accepts Python code!!
- **Where to publish?**
  - RMarkdown documents can be published FREE at [RPubs](https://rpubs.com/).

### Python (and R!)

#### [Jupyter Notebooks](https://jupyter.org/)

- Looking for HTML Widgets for Jupyter Notebooks? Look no further than [ipywidgets](https://ipywidgets.readthedocs.io/en/latest/index.html)!
  - [Examples](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20List.html)
- **Where to publish?**
  - [Tools for Sharing Jupyter Notebooks Online](https://towardsdatascience.com/tools-for-sharing-jupyter-notebooks-online-28c8d4ff821c)
    - [Voila](https://blog.jupyter.org/and-voil%C3%A0-f6a2c08a4a93) - Turn Jupyter Notebooks into standalone web applications
    - [nbviewer](https://nbviewer.org/) - Uses GitHub Pages
    - [Binder](https://mybinder.org/) - Uses GitHub and Docker.

### JavaScript visualization libraries

- [Chart.js](https://www.chartjs.org/): [Examples](https://www.chartjs.org/docs/latest/samples/information.html)
- [Highcharts](https://www.highcharts.com/): [Examples](https://www.highcharts.com/demo)
- [Plotly.js](https://plotly.com/javascript/): [Examples](https://plotly.com/javascript/)
- [D3.js](https://d3js.org/): [Examples](https://observablehq.com/@d3/gallery)
  - [Understanding Statistical Power and Significance Testing](https://rpsychologist.com/d3/nhst/) (made using D3.js, jQuery, and [jStat](http://jstat.github.io/), a JavaScript statistics library)
- **Where to publish?**
  - Since these are just JavaScript visualization packages, they can be published wherever HTML pages can be published. For example, one nice and easy place to publish for educators and academics is [GitHub Pages](https://pages.github.com/) (it&#39;s FREE!)

## Graphical Interface or Dashboard not needed

### Overview

- **Description** : These tools allow anybody to write and execute arbitrary Python and R code through the browser, and is especially well suited to machine learning, data analysis, and education

- **Difficulty** : Low (if teacher and students know coding)

- **Expertise Required** : Basic R or Python

- **Benefits** : Free. Gives users experience viewing, editing, and running code, and provides access to GPU processing capabilities

- **Challenges** : None

### Options

#### [Google Colaboratory](https://colab.research.google.com/)

#### [Jupyter Notebooks](https://jupyter.org/)

#### [CoCalc](https://cocalc.com/)

#### [ObservableHQ](https://observablehq.com/)

## Interactive does not need to be online

### Containers (e.g., docker)

- **Description** : A container is a standard unit of software that packages up code and all its dependencies, so the application runs quickly and reliably from one computing environment to another. Basically, a type of virtualization which is more appropriate for server-based applications rather than desktop applications.

- **Difficulty** : Low – High

- **Expertise Required** : Depends on the complexity. R developer with basic server administration skill to full stack developer with proficient server administration skills.

- **Benefits** : Allows for complex server-based applications to effectively be virtualized to run on a local computer regardless of the type of operating system. Once the container image is downloaded it can be run completely offline (unless the application also needs to communicate with other online services).

- **Challenges** : Requires docker to be installed on a local computer which could be challenging for some users. Container images can be quite large (3 –4GB) for even relatively simple server-based applications

### Desktop Application

- **Description** : Traditional desktop application that everyone is familiar with.

- **Difficulty** : Low – High

- **Expertise Required** : Depends on the complexity. At minimum, experience in the language of choice and experience building GUI applications.

- **Benefits** : Can be used completely offline (unless the application also needs to communicate with other online servers). Applications can be cross platform with the same code base depending on the programming language selected.

- **Challenges** : Cross platform applications can be harder to test and maintain and requires the developer to have access to multiple computers with different operating systems. Code signing would be required to prevent operating systems from blocking the launching of the program and displaying a warning that the program &quot;is from an unknown developer&quot; which can confuse and scare some users. Code signing comes at a small financial cost (several hundred dollars).

## &quot;Advanced&quot; interactive visualization widgets (Web Applications with advanced user interfaces)

### Cloud service/server hosting not required

Summary blog post: [Comparing data dashboarding tools and frameworks](https://www.datarevenue.com/en-blog/data-dashboarding-streamlit-vs-dash-vs-shiny-vs-voila)

#### Overview

- **Description** : Suitable for complex interactive dashboards, charts, maps, simulations and more

- **Difficulty** : Medium - High

- **Expertise Required** : Proficiency with JavaScript, HTML, CSS and Proficiency in understanding and coding complex Math and Statistical functions

- **Benefits** : Very flexible, native browser support, even support for machine learning (e.g., TensorFlow, JS)

- **Challenges** : Historically, there have been few scientific computing and statistics libraries for JavaScript. While this is gradually changing ,a complex interactive may require the developer to manually code some statistical functions commonly found in R or Python packages like SciPy.

### Example (JavaScript-based)

##### [React.js](https://reactjs.org/) (general web application framework)

- [Examples](https://reactjs.org/community/examples.html) (See the [calculator example](https://ahfarmer.github.io/calculator/) that can be published with [GitHub Pages](https://pages.github.com/))
- **Where to publish?**
  - Since this is just JavaScript, they can be published wherever HTML pages can be published. For example, one nice and easy place to publish for educators and academics is [GitHub Pages](https://pages.github.com/) (it&#39;s FREE!)

### Cloud service/server hosting required

#### Overview

##### Paid Service (e.g. shinyapps.io)

- **Description** : Hosting service that allows you to put your web application online

- **Difficulty** : Low

- **Expertise Required** : Basic R and Python experience, as well as experience with specific web application framework used

- **Benefits** : Only the web application has to be developed, all server administration is taken care of

- **Challenges** : Potentially unknown financial commitment, depends on if the app is open to the public and how popular the interactive becomes.

##### Custom Server

- **Description** : Building a server from the ground up.

- **Difficulty** : Low – High, depending on who is building and managing the custom server

- **Expertise Required** : Proficient server administrator and full stack developer

- **Benefits** : Complete control to configure, develop, and deploy server-based application as needed

- **Challenges** : Potentially unknown financial commitment, depends on if the app is open to the public and how popular the interactive becomes. Will require ongoing financial support. Will often require multiple people to maintain.

#### [Shiny](https://shiny.rstudio.com/) (R, Data-focused web application framework)

- [Examples](https://shiny.rstudio.com/gallery/) ([Life-sciences examples](https://shiny.rstudio.com/gallery/#life-sciences))
  - Check out [Radiant - A shiny app for statistics and machine learning](https://shiny.rstudio.com/gallery/radiant.html)
- [**Where to publish?**](https://shiny.rstudio.com/deploy/)
  - [Shinyapps.io](http://www.shinyapps.io/) (has a free limited tier)
  - [Shiny Server](https://www.rstudio.com/products/shiny/shiny-server) (open source - talk to your IT department)
  - [RStudio Connect](https://www.rstudio.com/products/connect/) (commercial/enterprise, [but can be free for academic institutional use](https://www.rstudio.com/pricing/academic-pricing/))
  - [RStudio Cloud](https://rstudio.cloud/) (there is a way to share a shiny app as code that can be run by students)
    - [Instructor pricing](https://rstudio.cloud/plans/instructor)
  - [ShinyProxy](https://www.shinyproxy.io/) (enterprise level publishing but open source - talk to your IT department)
  - [CyVerse VICE](https://learning.cyverse.org/projects/vice/en/latest/)

#### Python

- Data-focused web application frameworks
  - [Dash](https://plotly.com/dash/) (Uses [Plotly.js](https://plotly.com/javascript/) for data visualization and [React.js](https://reactjs.org/) for user interface)
    - [Examples](https://dash.gallery/Portal/)
    - [Open source version for Python](https://dash.plotly.com/)
    - [Open source version for Jupyter](https://github.com/plotly/jupyter-dash/blob/master/README.md)
    - Note: Can be used with R as well, although Shiny is more often used in R.
    - **Where to publish?**
      - [Heroku](https://dash.plotly.com/deployment#heroku-for-sharing-public-dash-apps-for-free)
  - [Streamlit](https://streamlit.io/) (Python web application that focuses on data)
    - [Examples](https://streamlit.io/gallery?category=education)
    - **Where to publish?**
      - [Streamlit Cloud](https://streamlit.io/cloud) (there is a free tier)
  - [Bokeh](https://docs.bokeh.org/en/latest/index.html) (Python web application that focuses on interactive visualizations)
    - Examples
      - [No server needed](https://docs.bokeh.org/en/latest/docs/gallery.html#standalone-examples)
      - [Server needed](https://docs.bokeh.org/en/latest/docs/gallery.html#server-app-examples)
    - **Where to publish?**
      - [Deployment](https://docs.bokeh.org/en/latest/docs/user_guide/server.html#userguide-server-deployment)
- General web application frameworks
  - [Flask](https://palletsprojects.com/p/flask/) (General Python web application framework)
    - **Where to publish?**
      - [Deployment options](https://flask.palletsprojects.com/en/2.0.x/deploying/)
  - [Django](https://www.djangoproject.com/) (General Python web application framework)

#### Jupyter

Suite of Jupyter products, including Notebooks, JupyerLab (Integrated Development Environment – IDE), and JupyterHub (JupyterLab with built-in user authentication)

- [2i2c](https://2i2c.org/) designs, develops, and operates JupyterHubs in the cloud for communities of practice in research &amp; education. It builds and supports open source infrastructure that serves these communities