const previewElement = document.getElementById('preview');
const editorField = document.getElementById('editor');

function updatePreview() {
  previewElement.innerHTML = marked(editorField.value);
}

function setDefault() {
  const defaultText =
  `# Markdown Previewer
## by Leonardo Genzolini

[Find more about me here](https://leonardogenzolini-portfolio-ba8b76628343.herokuapp.com/)

<dl>
  <dt>Here is a list of things I like:</dt>
  <dd>1. Coding</dd>
  <dd>2. Playing the piano</dd>
  <dd>3. Making short movies</dd>
</dl>

\`Here's an example of inline code:\`

\`\`\`
function exampleOfBlockCode() {
  console.log('This is a block of code');
}
\`\`\`

- This is a project from the freeCodeCamp Front-End Libraries Certification
- It was built using HTML, CSS, Bootstrap, and JavaScript

> Learn how to be a web developer at [![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)](https://www.freecodecamp.org)

**Bolded Text**
`;

  editorField.value = defaultText;
  updatePreview();
}

document.addEventListener('DOMContentLoaded', setDefault);
editorField.addEventListener('keyup', updatePreview);
