import { block } from "../utils"
import { TextBlock } from "./blocks"
import { TitleBlock } from "./blocks"
import { ColumnsBlock } from "./blocks"
import { ImageBlock } from "./blocks"

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [block('text'), block('title'), block('columns'), block('image')].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        let newBlock
        if (type === "text") {
            newBlock = new TextBlock(value, { styles });
        } else if (type === "title") {
            newBlock = new TitleBlock(value, { styles });
        } else if (type === "image") {
            newBlock = new ImageBlock(value, { styles }); 
        } else if (type === "columns") {
            newBlock = new ColumnsBlock(value, { styles }); 
        } else {
            throw new Error("Unknown block type");
        }
        this.update(newBlock)
        event.target.value.value = ""
        event.target.styles.value = ""
    }
}




