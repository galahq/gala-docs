---
id: authoring-interactive-data-tools
title: Interactive Data Tools
---

## "Basic" interactive visualization widgets

What makes it “basic”? May not need a server so can be published as a standalone web page.

### R (and Python!)

#### [RMarkdown](https://rmarkdown.rstudio.com/)/[Crosstalk](https://rstudio.github.io/crosstalk/index.html)

- [RMarkdown Gallery](https://rmarkdown.rstudio.com/gallery.html)
  - [Example of Data Dashboard using Highcharter HTMLWidget](https://beta.rstudioconnect.com/jjallaire/htmlwidgets-highcharter/htmlwidgets-highcharter.html) (uses [FlexDashboard](https://pkgs.rstudio.com/flexdashboard/) and [Highcharter](https://jkunst.com/highcharter/) HTMLWidgets)
- [HTMLWidgets](http://www.htmlwidgets.org/index.html): How to use JavaScript visualization packages from within R, RMarkdown, and R Shiny (see “Advanced” section below).
  - [HTMLWidgets Gallery](http://www.htmlwidgets.org/showcase_leaflet.html)
  - [Crosstalk](https://rstudio.github.io/crosstalk/index.html) enables HTMLWidgets to communicate with one another
    - [Crosstalk Example](https://rstudio.github.io/crosstalk/) (linking leaflet map with DataTable view)
  - [Highcharter](https://jkunst.com/highcharter/): R HTMLWidget that builds access to [Highcharts](https://www.highcharts.com/) JavaScript visualization package.  
    - Some work is being done on accessible visualization. [See here](https://dataand.me/posts/2022-03-09-highcharter-a11y-talk/).
- Note: RMarkdown also accepts Python code!!
- **Where to publish**?  
  - RMarkdown documents can be published FREE at [RPubs](https://rpubs.com/).

### Python (and R!)

#### [Jupyter Notebooks](https://jupyter.org/)

- Looking for HTML Widgets for Jupyter Notebooks? Look no further than [ipywidgets](https://ipywidgets.readthedocs.io/en/latest/index.html)!
  - [Examples](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20List.html)
  - **Where to publish?**
    - [Tools for Sharing Jupyter Notebooks Online](https://towardsdatascience.com/tools-for-sharing-jupyter-notebooks-online-28c8d4ff821c)
      - [Voila](https://blog.jupyter.org/and-voil%C3%A0-f6a2c08a4a93) - Turn Jupyter Notebooks into standalone web applications
      - [nbviewer](https://nbviewer.org/) - Uses GitHub Pages
      - [Binder](https://mybinder.org/) - Uses GitHub and Docker. Creates a docker image of your  

#### JavaScript visualization libraries

- [Chart.js](https://www.chartjs.org/): [Examples](https://www.chartjs.org/docs/latest/samples/information.html)
- [Highcharts](https://www.highcharts.com/): [Examples](https://www.highcharts.com/demo)
- [Plotly.js](https://plotly.com/javascript/) [Examples](https://plotly.com/javascript/)
- [D3.js](https://d3js.org/): [Examples](https://observablehq.com/@d3/gallery)
- [Understanding Statistical Power and Significance Testing](https://rpsychologist.com/d3/nhst/) (made using D3.js, jQuery, and [jStat](http://jstat.github.io/), a JavaScript statistics library)
- *Where to publish?*
  - Since these are just JavaScript visualization packages, they can be published wherever HTML pages can be published. For example, one nice and easy place to publish for educators and academics is [GitHub Pages](https://pages.github.com/) (it’s FREE!)

## “Advanced” interactive visualization widgets (Web Applications with advanced user interfaces)

What makes it “advanced”? Requires a server, which brings with it the challenges of more complicated deployment and publishing with broad sharing and scalability issues.

Summary blog post: [Comparing data dashboarding tools and frameworks](https://www.datarevenue.com/en-blog/data-dashboarding-streamlit-vs-dash-vs-shiny-vs-voila)

### JavaScript

#### [React.js](https://reactjs.org/) (general web application framework)

- [Examples](https://reactjs.org/community/examples.html) (See the [calculator example](https://ahfarmer.github.io/calculator/) that can be published with [GitHub Pages](https://pages.github.com/))
- Where to publish?
  - Since this is just JavaScript, they can be published wherever HTML pages can be published. For example, one nice and easy place to publish for educators and academics is [GitHub Pages](https://pages.github.com/) (it’s FREE!)



### [Shiny](https://shiny.rstudio.com/) (R, Data-focused web application framework)

- [Examples](https://shiny.rstudio.com/gallery/) ([Life-sciences examples](https://shiny.rstudio.com/gallery/#life-sciences))
  - Check out [Radiant - A shiny app for statistics and machine learning](https://shiny.rstudio.com/gallery/radiant.html)
- [**Where to publish?**](https://shiny.rstudio.com/deploy/)
  - [Shinyapps.io](http://www.shinyapps.io/) (has a free limited tier)
  - [Shiny Server](https://www.rstudio.com/products/shiny/shiny-server) (open source - talk to your IT department)
  - [RStudio Connect](https://www.rstudio.com/products/connect/) (commercial/enterprise, [but can be free for academic institutional use](https://www.rstudio.com/pricing/academic-pricing/))
  - [RStudio Cloud](https://rstudio.cloud/) (there is a way to share a shiny app as code that can be run by students)
    - [Instructor pricing](https://rstudio.cloud/plans/instructor)
  - [ShinyProxy](https://www.shinyproxy.io/) (enterprise level publishing but open source - talk to your IT department)

### Python

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
- General web application frameworks
  - [Flask](https://palletsprojects.com/p/flask/) (General Python web application framework)
    - **Where to publish?**
      - [Deployment options](https://flask.palletsprojects.com/en/2.0.x/deploying/)
  - [Django](https://www.djangoproject.com/) (General Python web application framework)

## Don&#39;t need a graphical user interface or dashboard