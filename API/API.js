/**
 * Created by Crow on 2014/9/25.
 */

;(function(window){

    window.host = 'http://qn.superexpress.cn:8080';

    var api = {
        'engines' : '/qianniu/engines',

        /*---------------------------------------------------------账户首页----------------------------------------------------------------*/
        'userIndex.reports' : '/qianniu/accounts/reports',
        'userIndex.profiles' : '/qianniu/accounts/profiles',
        'userIndex.planList' : '/qianniu/campaigns',
        'userIndex.all' : '/qianniu/cust/getAccountInfo',                                               //全部数据
        'userIndex.historicalTrends': '/qianniu/cust/reportChart',                                      //计划历史趋势
        'userIndex.planStatus': '/qianniu/common/campaignProfileBaseopr/updateCampaignOnlineStatus',    //计划状态
        'userIndex.bodyNumber': '/qianniu/cust/getCampadgroupCount',                                    //宝贝个数
        'userIndex.cancelHosting': '/qianniu/campaignProfile/cancelAuto',                               //取消托管

        /*---------------------------------------------------------推广计划----------------------------------------------------------------*/
        'promotePlan.breadcrumb' : '/qianniu/campaigns',                         //面包屑
        'promotePlan.planOverview' : '/qianniu/userCampaignProfile/campaignGeneralSituation',           //计划概况
        'promotePlan.historicalTrends' : '/qianniu/userCampaignProfile/campaignHistoricalTrend',        //计划历史趋势
        'promotePlan.increaseInvestment' : '/qianniu/campaign-interventions/{campaignId}/enlarge',      //加大投入
        'promotePlan.reduceInvestment' : '/qianniu/campaign-interventions/{campaignId}/compress',       //减少托人
        'promotePlan.revocationInvestment' : '/qianniu/campaign-interventions/{campaignId}/cancel',     //撤销投入
        'promotePlan.allItem' : '/qianniu/adgroupList/allItem',                                         //托管计划全部数据
        'promotePlan.mandateItem' : '/qianniu/adgroupList/mandateItem',                                 //托管宝贝
        'promotePlan.notMandateItem' : '/qianniu/adgroupList/notMandateItem',                           //非托管宝贝
        'promotePlan.updateWordPrice' : '/qianniu/auto/campaignBaseinfoManage/updateWordPriceLimit',    //修改关键词限价
        'promotePlan.updateBudget' : '/qianniu/common/campaignProfileBaseopr/updateBudget',             //修改推广计划日限额
        'promotePlan.updateWordMaxPrice' : '/qianniu/adgroupList/setAdgroupWordMaxPrice',               //修改宝贝关键词最高限价
        'promotePlan.updateBodyStatus' : '/qianniu/common/adgroupbaseopr/updateAdgroupsOnlineStatus',   //推广/暂停宝贝
        'promotePlan.deleteBody' : '/qianniu/common/adgroupbaseopr/deleteAdgroups',                     //删除宝贝
        'promotePlan.updateBodyMandate' : '/qianniu/campaignProfile/changeMandateStatus',               //取消/加入宝贝托管
        'promotePlan.item' : '/qianniu/pricingRange/item',                                              //获取宝贝关键词出价范围
        'promotePlan.campaign' : '/qianniu/pricingRange/campaign',                                      //计划关键词出价范围
        'promotePlan.adgroup' : '/qianniu/pricingRange/adgroup',


        'promotePlan.bodyNumMandate' : '/qianniu/initHostings/prepareHostingAdgroups/{engineNo}/{engineType}',      //已托管宝贝个数
        'promotePlan.unplannedBaby' : '/qianniu/initHostings/campOuterItems/{engineNo}/{engineType}',               //加载计划外宝贝
        'promotePlan.unselectToSelect' : '/qianniu/initHostings/addHostingItems/{engineNo}/{engineType}',           //添加宝贝至已选择宝贝
        'promotePlan.selectToDelete' : '/qianniu/initHostings/removeHostingItems/{engineNo}/{engineType}',          //从已选择宝贝中删除宝贝
        'promotePlan.unselectToAll' : '/qianniu/initHostings/addAllCampOuterItems/{engineNo}/{engineType}',         //全部添加
        'promotePlan.addAllCampInnterItems' : '/qianniu/initHostings/addAllCampInnterItems/{engineNo}/{engineType}',
        'promotePlan.selectToAll' : '/qianniu/initHostings/removeAllChosenItems/{engineNo}/{engineType}',           //全部移除
        'promotePlan.submitSelectBody' : '/qianniu/initHostings/itemsChooseSubmit/{engineNo}/{engineType}',         //添加宝贝提交
        'promotePlan.selectBody' : '/qianniu/initHostings/chosenHostingItems/{engineNo}/{engineType}',              //加载已选择的宝贝
        'promotePlan.addProcess' : '/qianniu//auto/campaignProfile/monitorAdgroups',                                //查看宝贝添加流程
        'promotePlan.selectBodyLimit' : '/qianniu/engines/{engineNo}/limitCounts',                                  //获取宝贝限制数量
        'promotePlan.plannedBody' : '/qianniu/engines/{engineNo}/campaignInnerItems',        //获取计划内宝贝

        /*---------------------------------------------------------管理关键词----------------------------------------------------------------*/
        'manageKeywords.babyOverview' : '/qianniu/keywordManage/showKeywordsInfo',  //宝贝概况
        'manageKeywords.babyCreative' : '/qianniu/creativeBase/adgroupCreativeProfiles',    //宝贝创意
        'manageKeywords.keywordsList' : '/qianniu/keywordManage/getKeywordListInfo', //关键词列表
        'manageKeywords.spiliceWords' : '/qianniu/keywords/segmentationInformation', //分词
        'manageKeywords.temporaryDeleteKeyword' : '/qianniu/auto/keywordManage/temporaryDeleteKeyword',  //临时删除关键词
        'manageKeywords.permanentDeleteKeyword' : '/qianniu/auto/keywordManage/permanentDeleteKeyword',      //持久删除关键词
        'manageKeywords.getWhiteListKeywords' : '/qianniu/auto/whiteList/getWhiteListKeywords',     //获取白名单列表
        'manageKeywords.getAdgroupBlasklistWords' : '/qianniu/auto/blackList/getAdgroupBlasklistWords',            //获取黑名单列表
        'manageKeywords.addWhiteListKeywords' : '/qianniu/auto/whiteList/addWhiteListKeywords',     //关闭关键词托管状态
        'manageKeywords.unlockWhiteListKeywords' : '/qianniu/auto/whiteList/unlockWhiteListKeywords',    //unlockWhiteListKeywords
        'manageKeywords.addkeywords' : '/qianniu/keywords',       //通过广告组id添加关键词
        'manageKeywords.addBlackList' : '/qianniu/auto/blackList/addBlackList',         //增加黑名单
        'manageKeywords.addBlackListSe' : '/qianniu/keywordManage/addBlackList',         //增加黑名单
        'manageKeywords.getAdgroupBlasklistWords' : '/qianniu/auto/blackList/getAdgroupBlasklistWords',        //获得黑名单列表
        'manageKeywords.blackKeywords' : '/qianniu/blackKeywords',
        'manageKeywords.blackKeywordspost' : '/qianniu/blackKeywords',
        'manageKeywords.blackKeywordsDel' : '/qianniu/blackKeywords',



        /*--------------------------------------------------------*/
        'engineCreate.init' : '/qianniu/campaigns',  //初始化数据
        'engineCreate.recordHostingCampaignInfo' : '/qianniu/initHostings/recordHostingCampaignInfo/{engineNo}/{engineType}',      //第一步提交
        'engineCreate.hostingCampaigns' : '/qianniu/hostingCampaigns',    //设置托管计划信息
        'engineCreate.detectClosePCInsidePlatform' : '/qianniu/initHostings/detectClosePCInsidePlatform/{campaignId}',      //探测计划是否可以关PC端站内投放

        'engineCreate.hostingStep2' : '/qianniu/initHostings/hostingStep2/{engineNo}/{engineType}',      //宝贝选择
        'engineCreate.recordHostingItems' : '/qianniu/initHostings/recordHostingItems/{engineNo}',        //记录用户选取的托管宝贝


        'engineCreate.hostingStep3' : '/qianniu/initHostings/hostingStep3/{engineNo}',       //显示托管概要信息
        'engineCreate.submit' : '/qianniu/initHostings/hosting/{engineNo}/{engineType}',     //提交托管流程
        'engineCreate.detaile' : '/qianniu/initHostings/hostingStep3/{engineNo}/{engineType}',   //显示托管概要信息




        'hosting.clean' : '/qianniu/initHostings/clean/{engineNo}/{engineType}',      //清除托管信息
        'hosting.refresh'  : '/qianniu/auto/campaignProfile/refreshHostingAdgroupsCache',
        'hosting.hostingStatus' : '/qianniu/campaigns/{campaignId}/hostingStatus',

        'loading.requestReportSyn' : '/qianniu/qn/user/requestReportSyn',           //同步数据
        'loading.checkReportSyn' : '/qianniu/qn/user/checkReportSyn'               //查看同步状态
    };

    var getApi = function(attribute){
        return host + api[attribute];
    };

    window.getApi = getApi;

})(window);