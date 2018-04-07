/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : apijyy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-07 22:25:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for n_filed_show
-- ----------------------------
DROP TABLE IF EXISTS `n_filed_show`;
CREATE TABLE `n_filed_show` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL COMMENT '产品ID',
  `product_name` tinyint(1) NOT NULL DEFAULT '0' COMMENT '产品名称',
  `trait` tinyint(1) NOT NULL DEFAULT '0' COMMENT '产品特点',
  `fund` tinyint(1) NOT NULL DEFAULT '0' COMMENT '资金方',
  `age` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-年龄',
  `age_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-年龄备注',
  `nationality` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-国、户籍(0中国、1港澳台、2福建)',
  `credit_line` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-征信界定备注(最高逾期)',
  `credit_line_remark` tinyint(1) NOT NULL,
  `income` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-收入',
  `house_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房屋-房产类型（0住宅、1别墅、2商铺（办公楼）、3厂房）',
  `house_type_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房屋-房产类型配注',
  `land_property` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房屋-土地性质（划拨、出让、转让）',
  `access_area` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房屋-准入区域',
  `access_area_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房屋-准入区域配注',
  `area_reuqire` tinyint(1) NOT NULL DEFAULT '0' COMMENT '面积要求',
  `house_age` tinyint(1) NOT NULL DEFAULT '0' COMMENT '房龄',
  `access_range` tinyint(1) NOT NULL DEFAULT '0' COMMENT '接受未成年/老人',
  `access_third_party_mortgage` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否接受第三方抵押(直系亲属、其他)',
  `spare_house` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否需要备用房（0不需要1需要）',
  `spare_house_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '备用房配注',
  `quota` tinyint(1) NOT NULL DEFAULT '0' COMMENT '额度',
  `quota_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '额度配注',
  `mortgage_rate` tinyint(1) NOT NULL DEFAULT '0' COMMENT '抵押率',
  `term` tinyint(1) NOT NULL DEFAULT '0' COMMENT '期限',
  `term_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '期限配注',
  `repayment_method` tinyint(1) NOT NULL DEFAULT '0' COMMENT '还款方式(先息后本、等额本息、等额本金、等本等息、其他)',
  `repayment_method_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '还款方式配注',
  `repayment_date` tinyint(1) NOT NULL DEFAULT '0' COMMENT '还款日期',
  `loan_rate` tinyint(1) NOT NULL DEFAULT '0' COMMENT '贷款利率',
  `loan_rate_remarks` tinyint(1) NOT NULL DEFAULT '0' COMMENT '贷款利率配注',
  `late_charge` tinyint(1) NOT NULL DEFAULT '0' COMMENT '逾期罚息',
  `deposit` tinyint(1) NOT NULL DEFAULT '0' COMMENT '保证金',
  `is_justice` tinyint(1) NOT NULL DEFAULT '0' COMMENT '有无公正（0无；1有）',
  `justice_fee` tinyint(1) NOT NULL DEFAULT '0' COMMENT '公证费',
  `is_evaluate` tinyint(1) NOT NULL DEFAULT '0' COMMENT '有无评估',
  `evaluate_fee` tinyint(1) NOT NULL DEFAULT '0' COMMENT '评估费',
  `settle_fee` tinyint(1) NOT NULL DEFAULT '0' COMMENT '下户费',
  `other_fee` tinyint(1) NOT NULL DEFAULT '0' COMMENT '其它费用',
  `package_content` tinyint(1) NOT NULL DEFAULT '0' COMMENT '包装内容',
  `required_materials` tinyint(1) NOT NULL DEFAULT '0' COMMENT '所需材料',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_filed_show
-- ----------------------------

-- ----------------------------
-- Table structure for n_product
-- ----------------------------
DROP TABLE IF EXISTS `n_product`;
CREATE TABLE `n_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL COMMENT '产品名称',
  `trait` text NOT NULL COMMENT '产品特点',
  `fund` varchar(255) NOT NULL COMMENT '资金方',
  `age` tinyint(3) NOT NULL COMMENT '人员-年龄',
  `age_remarks` varchar(100) NOT NULL COMMENT '人员-年龄备注',
  `nationality` tinyint(1) NOT NULL DEFAULT '0' COMMENT '人员-国、户籍(0中国、1港澳台、2福建)',
  `credit_line` int(6) NOT NULL COMMENT '人员-征信界定(最高逾期)',
  `credit_line_remarks` varchar(255) NOT NULL COMMENT '人员-征信界定配注',
  `income` varchar(100) NOT NULL COMMENT '人员-收入',
  `house_type` tinyint(1) NOT NULL COMMENT '房屋-房产类型（0住宅、1别墅、2商铺（办公楼）、3厂房）',
  `house_type_remarks` varchar(255) NOT NULL COMMENT '房屋-房产类型配注',
  `land_property` varchar(100) NOT NULL COMMENT '房屋-土地性质（划拨、出让、转让）',
  `access_area` varchar(255) NOT NULL COMMENT '房屋-准入区域',
  `access_area_remarks` varchar(255) NOT NULL COMMENT '房屋-准入区域配注',
  `area_reuqire` int(6) NOT NULL COMMENT '面积要求',
  `house_age` int(6) NOT NULL COMMENT '房龄',
  `access_range` varchar(255) NOT NULL COMMENT '接受未成年/老人',
  `access_third_party_mortgage` varchar(255) NOT NULL COMMENT '是否接受第三方抵押(直系亲属、其他)',
  `spare_house` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否需要备用房（0不需要1需要）',
  `spare_house_remarks` varchar(255) NOT NULL COMMENT '备用房配注',
  `quota` int(6) NOT NULL COMMENT '额度',
  `quota_remarks` varchar(255) NOT NULL COMMENT '额度配注',
  `mortgage_rate` varchar(20) NOT NULL COMMENT '抵押率',
  `term` varchar(20) NOT NULL COMMENT '期限',
  `term_remarks` varchar(255) NOT NULL COMMENT '期限配注',
  `repayment_method` varchar(60) NOT NULL COMMENT '还款方式(先息后本、等额本息、等额本金、等本等息、其他)',
  `repayment_method_remarks` varchar(255) NOT NULL COMMENT '还款方式配注',
  `repayment_date` varchar(10) NOT NULL COMMENT '还款日期',
  `loan_rate` varchar(10) NOT NULL COMMENT '贷款利率',
  `loan_rate_remarks` varchar(255) NOT NULL COMMENT '贷款利率配注',
  `late_charge` varchar(255) NOT NULL COMMENT '逾期罚息',
  `deposit` varchar(60) NOT NULL COMMENT '保证金',
  `is_justice` tinyint(1) NOT NULL COMMENT '有无公正（0无；1有）',
  `justice_fee` varchar(10) NOT NULL COMMENT '公证费',
  `is_evaluate` tinyint(1) NOT NULL COMMENT '有无评估',
  `evaluate_fee` varchar(10) NOT NULL COMMENT '评估费',
  `settle_fee` varchar(10) NOT NULL COMMENT '下户费',
  `other_fee` varchar(10) NOT NULL COMMENT '其它费用',
  `package_content` text NOT NULL COMMENT '包装内容',
  `required_materials` text NOT NULL COMMENT '所需材料',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_product
-- ----------------------------
