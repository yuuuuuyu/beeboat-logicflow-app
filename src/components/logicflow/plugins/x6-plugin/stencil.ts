/*
 * @Description:
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 12:40:30
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-28 17:36:53
 */
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph } from "@antv/x6"

export default class BtpStencil extends Stencil {
  private stencilContainer: HTMLDivElement
  private options: Object
  private blf: Graph

  constructor(options) {
    super(options)
    this.options = options

    let { container, target } = options
    this.stencilContainer = container
    this.blf = target

    this.initStencil()
  }
  /**
   * 自定义节点面板
   */
  commonAttrs = {
    body: {
      fill: "#fff",
      stroke: "#8f8f8f",
      strokeWidth: 1,
    },
  }
  initStencil(): void {
    // TODO
    const stencil = new Stencil({
      target: this.blf,
      stencilGraphHeight: 0,
      collapsable: false,
      groups: [
        {
          name: "group1",
          title: "Group(Collapsable)",
          collapsable: false,
        },
        {
          name: "group2",
          title: "Group",
          collapsable: false,
        },
      ],
    })

    this.stencilContainer.appendChild(stencil.container)

    const n1 = this.blf.createNode({
      shape: "rect",
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: "rect",
      attrs: this.commonAttrs,
    })

    const n2 = this.blf.createNode({
      shape: "circle",
      x: 180,
      y: 40,
      width: 40,
      height: 40,
      label: "circle",
      attrs: this.commonAttrs,
    })

    const n3 = this.blf.createNode({
      shape: "ellipse",
      x: 280,
      y: 40,
      width: 80,
      height: 40,
      label: "ellipse",
      attrs: this.commonAttrs,
    })

    const n4 = this.blf.createNode({
      shape: "path",
      x: 420,
      y: 40,
      width: 40,
      height: 40,
      // https://www.svgrepo.com/svg/13653/like
      path: "M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z",
      attrs: this.commonAttrs,
      label: "path",
    })

    stencil.load([n1, n2], "group1")
    stencil.load([n3, n4], "group2")
  }
}

