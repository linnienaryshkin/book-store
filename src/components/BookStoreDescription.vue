<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1 id="challenge">Challenge</h1>
    <p>
      Build a Vue.js application that lets users search for a cities and books in a provided list.
    </p>
    <ul>
      <li>
        Capture key presses from a text input and use the current value of the input to match items
        in the list (shown below).
      </li>
      <li>
        The application should output the results under the input field as soon as you type at least
        3 characters.
      </li>
      <li>
        If you type less than 3 characters in the text field, it should not output any results. (It
        can show a prompt to type at least 3 characters)
      </li>
      <li>If there are no results for the search, you should let the user know.</li>
      <li>
        When the page loads the search field should be selected automatically, so you can start
        typing (similar to when you go to
        <a href="https://www.google.com/">https://www.google.com/</a>)
      </li>
      <li>Use some type of data store to store the results that your components will consume.</li>
      <li>
        You can use any approach for getting the store state into your components. The
        <strong
          >important part is that you use one or more stores to store your datasets and query
          results.</strong
        >
      </li>
      <li>
        There should be two autocompletes on the final page, one for the <code>cities</code> and one
        for <code>books</code>. The <code>books</code> autocomplete should show primarily the book
        title and secondarily the author for every matched result.
      </li>
      <li>
        Include at least three unit tests. You can select the units of code to test based on what
        you find most important. You are free to use any testing framework of choice.
      </li>
      <li>
        For the <code>cities</code> autocomplete, search through this list for approximate matches.
        For example, if the user enters <code>san</code>, it should match <code>san</code>,
        <code>santiago</code>, <code>san francisco</code>, <code>santa rosa</code>, etc. If they
        enter <code>sant</code>, it should only match <code>santiago</code> and
        <code>santa rosa</code>.
      </li>
      <li>
        For the <code>books</code> autocomplete, search through the list of
        <code>book.title</code>s. For example, if the user enters <code>don</code> it should show a
        suggestion for &#39;Don Quixote&#39;.
      </li>
    </ul>
    <p><strong>The dataset</strong></p>
    <pre><code class="lang-javascript">const cities = [
  <span class="hljs-symbol">'san</span> jose',
  <span class="hljs-symbol">'santiago'</span>,
  <span class="hljs-symbol">'san</span> francisco',
  <span class="hljs-symbol">'santa</span> rosa',
  <span class="hljs-symbol">'san</span> juan',
  <span class="hljs-symbol">'sabadell'</span>,
  <span class="hljs-symbol">'salamanca'</span>,
  <span class="hljs-symbol">'salt</span> lake city',
  <span class="hljs-symbol">'salinas'</span>,
  <span class="hljs-symbol">'salem'</span>,
  <span class="hljs-symbol">'sausalito'</span>,
  <span class="hljs-symbol">'taipei'</span>,
  <span class="hljs-symbol">'tel</span> aviv',
  <span class="hljs-symbol">'tempe'</span>,
  <span class="hljs-symbol">'termez'</span>,
  <span class="hljs-symbol">'temuco'</span>,
  <span class="hljs-symbol">'tiajuna'</span>,
  <span class="hljs-symbol">'tieling'</span>,
  <span class="hljs-symbol">'thousand</span> oaks',
  <span class="hljs-symbol">'thunder</span> bay',
  <span class="hljs-symbol">'tokyo'</span>,
  <span class="hljs-symbol">'tulsa'</span>
]

const books = [
  {
    title: <span class="hljs-symbol">'Don</span> <span class="hljs-type">Quixote'</span>,
    author: <span class="hljs-symbol">'Miguel</span> <span class="hljs-type">De</span> <span class="hljs-type">Cervantes'</span>
  },
  {
    title: <span class="hljs-string">"Pilgrim's Progress"</span>,
    author: <span class="hljs-symbol">'John</span> <span class="hljs-type">Bunyan'</span>
  },
  {
    title: <span class="hljs-symbol">'Robinson</span> <span class="hljs-type">Crusoe'</span>,
    author: <span class="hljs-symbol">'Daniel</span> <span class="hljs-type">Defoe'</span>
  },
  {
    title: <span class="hljs-string">"Gulliver's Travels"</span>,
    author: <span class="hljs-symbol">'Jonathan</span> <span class="hljs-type">Swift'</span>
  },
  {
    title: <span class="hljs-symbol">'Tom</span> <span class="hljs-type">Jones'</span>,
    author: <span class="hljs-symbol">'Henry</span> <span class="hljs-type">Fielding'</span>
  },
  {
    title: <span class="hljs-symbol">'Clarissa'</span>,
    author: <span class="hljs-symbol">'Samuel</span> <span class="hljs-type">Richardson'</span>
  },
  {
    title: <span class="hljs-symbol">'Tristram</span> <span class="hljs-type">Shandy'</span>,
    author: <span class="hljs-symbol">'Laurence</span> <span class="hljs-type">Sterne'</span>
  }
]
</code></pre>
    <h3 id="build-setup">Build setup</h3>
    <p>
      This coding challenge is not in place to evaluate how you set up your Vue.js / Babel / Webpack
      build, but to give you a chance to build something small so we can see how you approach it. In
      order to adhere to the 2-3 hour target time, we <em>highly</em> recommend that you use
      <a href="https://cli.vuejs.org/guide/creating-a-project.html">vue create</a>.
    </p>
    <h3 id="requirements">Requirements</h3>
    <ul>
      <li>Use <a href="https://vuejs.org/">Vue.js</a></li>
      <li>
        Provide a <code>README</code> file and add information on how to build and/or run the
        project locally. This file can also include your thought process and any explanation.
      </li>
      <li>Push the application to a public github repo and provide us with a link.</li>
    </ul>
    <h3 id="implementation">Implementation</h3>
    <ul>
      <li>
        If you want to, feel free to use any boilerplate projects and <code>gulp</code>,
        <code>grunt</code>, <code>webpack</code> that bootstap the project for you, (but we
        recommend <a href="https://cli.vuejs.org/guide/creating-a-project.html">vue create</a>, as
        noted above).
      </li>
      <li>
        If you are using any js processors,
        <strong>include both source and distribution files</strong>.
      </li>
      <li>Add some styles, make it pretty.</li>
      <li>
        Do not cheat. There are lots of autocomplete projects out there, we&#39;re not interested in
        those. We want to see <strong>how you think</strong>.
      </li>
      <li>
        If you want to go above and beyond, by adding additional functionality such as some sort of
        list view that shows your selected cities or a more advanced autocomplete feel free to,
        <strong>as long as you still satisfy the original requirements</strong>.
      </li>
    </ul>
    <h3 id="what-we-re-evaluating">What we&#39;re evaluating</h3>
    <ul>
      <li>Does <code>README.md</code> contain sufficient information to run the project?</li>
      <li>Does it work?</li>
      <li>How are the components structured?</li>
      <li>How clean is the code?</li>
      <li>Does the end result have a clean user experience?</li>
    </ul>
    <h3 id="tips">Tips</h3>
    <ul>
      <li>
        DRY code is not the only thing that matters, we also care about things getting too complex.
        Finding the line between writing simple and DRY code is part of the challenge.
      </li>
      <li>
        One of the core challenges here is how to structure components and stores around two types
        of data (strings and objects), it is important to recognize that before you start writing
        your code.
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  max-height: 500px;
  overflow-y: auto;
}
</style>
