import { LightningElement } from "lwc";

export default class Q320026lwc extends LightningElement {
  sections = [
    { title: "Section 1", body: "Section 1 Content", id: "1" },
    { title: "Section 2", body: "Section 2 Content", id: "2" },
    { title: "Section 3", body: "Section 3 Content", id: "3" },
    { title: "Section 4", body: "Section 4 Content", id: "4" },
  ];
  onsectiontoggle(event) {
    let openSections = event.detail.openSections;
    let sections = this.template.querySelectorAll(
      "lightning-accordion-section"
    );
    sections.forEach((section) => {
      section.dataset.open = !!(openSections.indexOf(section.name) > -1);
    });
  }
}