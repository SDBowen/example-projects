const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
    `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page!</p>
    `;
};
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </form>  
  `;
};

// Instantiate pageState
const page = new PageState();

// Init new first state
page.init();

// UI Vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');


// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault;
})

// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault;
})

// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault;
})