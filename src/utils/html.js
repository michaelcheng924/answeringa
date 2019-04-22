import { map } from "lodash";

export function getHtmlWithReferences(html, references) {
  if (!references) {
    return html;
  }

  const matches = html.match(/\[[0-9]+\]/g);

  if (matches.length !== Object.keys(references).length) {
    return false;
  }

  if (matches) {
    html = matches.reduce((result, match, index) => {
      const number = index + 1;

      return result.replace(
        match,
        `<span class="superscript"><a href="#footnote-${number}" id="text-${number}">[${number}]</a></span>`
      );
    }, html);
  }

  return `
    ${html}

    <h3>References</h3>

    <ol>
      ${map(references, (reference, number) => {
        return `<li><a class="reference-arrow" href="#text-${number}" id="footnote-${number}">^</a> ${reference}</li>`;
      }).join("\n")}
    </ol>
  `;
}
