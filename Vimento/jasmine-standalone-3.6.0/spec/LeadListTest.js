//Test generateLeadList
//Arrange
var mMob = new L.circleMarker([0.00, 0.00]);
mMob.downFiber = 10;
mMob.upFiber = 10;
mMob.downKabel = 10;
mMob.upKabel = 10;
mMob.downDsl = 10;
mMob.upDsl = 10;
mMob.mobil = 10;
mMob.name = 'Test1';
mMob.business = 'Branche1';
mMob.address = 'Testvej 1';
mMob.employees = 1;

var mDsl = new L.circleMarker([0.00, 0.00]);
mDsl.downFiber = 10;
mDsl.upFiber = 10;
mDsl.downKabel = 10;
mDsl.upKabel = 10;
mDsl.downDsl = 10;
mDsl.upDsl = 10;
mDsl.mobil = 10;
mDsl.name = 'Test2';
mDsl.business = 'Branche2';
mDsl.address = 'Testvej 2';
mDsl.employees = 2;

var mKab = new L.circleMarker([0.00, 0.00]);
mKab.downFiber = 10;
mKab.upFiber = 10;
mKab.downKabel = 10;
mKab.upKabel = 10;
mKab.downDsl = 10;
mKab.upDsl = 10;
mKab.mobil = 10;
mKab.name = 'Test3';
mKab.business = 'Branche3';
mKab.address = 'Testvej 3';
mKab.employees = 3;

var mFib = new L.circleMarker([0.00, 0.00]);
mFib.downFiber = 10;
mFib.upFiber = 10;
mFib.downKabel = 10;
mFib.upKabel = 10;
mFib.downDsl = 10;
mFib.upDsl = 10;
mFib.mobil = 10;
mFib.name = 'Test4';
mFib.business = 'Branche4';
mFib.address = 'Testvej 4';
mFib.employees = 4;

var markersToAdd = new Array();
var filterArray = new Array();
filterArray.push(mMob);
filterArray.push(mDsl);
filterArray.push(mKab);
filterArray.push(mFib);

//Act|Assert
generateLeadList();
