/*
 * @Description: 自定义节点hook
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-01-01 20:53:37
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-01 22:03:14
 */
import { computed, inject, ref } from "vue"
// TODO
export const useNodeBase = () => {
  const Graph = inject<any>("getGraph")("getGraph")
  const Node = inject<any>("getNode")("getNode")
  const data = ref(Node.data)
  Node.on("change:data", ({ current }: any) => {
    data.value = current
  })
  const selectedToClassName = computed(() => {
    if (data.value?.selected) {
      return {
        "node-list-selected": true,
      }
    } else {
      return {}
    }
  })
  return {
    Graph,
    Node,
    data,
    selectedToClassName,
  }
}

