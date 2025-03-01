import { CreateElementOptions } from "../components/index";

const createElement = (options: CreateElementOptions): HTMLElement => {
    const { tag = 'div', textContent = '', parent, classes = [] } = options;

    const element = document.createElement(tag);

    element.textContent = textContent;
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (parent !== null && parent !== document.querySelector('body')) {
        parent.append(element);
    } else {
        parent.prepend(element);
    }

    return element;
};

export { createElement };