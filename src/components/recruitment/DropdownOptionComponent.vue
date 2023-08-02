<template>
  <el-dropdown trigger="click" class="custom-dropdown">
    <span class="el-dropdown-link">
      {{ props.activeTitle }}
      <el-icon class="el-icon--right">
        <img src="@/assets/icon/arrow-down.svg" />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="custom-dropdown-menu">
        <el-dropdown-item
          v-for="(item, index) in props.listData"
          :key="index"
          @click="handleChange(item)"
        >
          {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const emit = defineEmits(['handleChange'])

const props = defineProps({
  listData: Array as PropType<any[]>,
  activeTitle: String
})

const handleChange = (item) => {
  emit('handleChange', item)
}
</script>

<style scoped lang="scss">
.custom-dropdown {
  .el-dropdown-link {
    color: #fff;
    font-size: 24px;
    font-family: SVN-TT Hoves;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
  }
}
::v-deep .el-dropdown-menu__item {
  color: #000;
  font-family: SVN-TT Hoves;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  padding: 10px 16px;
}

@media screen and (max-width: 992px) {
  .custom-dropdown {
    .el-dropdown-link {
      font-size: 14px;
      line-height: 20px;
    }
  }
  ::v-deep .el-dropdown-menu__item {
    font-size: 14px;
  }
}
</style>
