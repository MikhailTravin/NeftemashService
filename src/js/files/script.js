import { isMobile, bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle, FLS } from "../files/functions.js";

//Скролл 
function scrollBlock() {

	let scrollBlocks = document.querySelectorAll('.scroll');

	if (scrollBlocks) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		scrollBlocks.forEach(scrollBlock => {
			scrollBlock.addEventListener('mousedown', function (e) {
				drag = true;
				coorX = e.pageX;
				coorY = e.pageY;
			});
			document.addEventListener('mouseup', function () {
				drag = false;
				left = scrollBlock.scrollLeft;
				top = scrollBlock.scrollTop;
			});
			scrollBlock.addEventListener('mousemove', function (e) {
				if (drag) {
					this.scrollLeft = left - (e.pageX - coorX) * speed;
					this.scrollTop = top - (e.pageY - coorY) * speed;
				}
			});
		});

	}

};

scrollBlock()

//========================================================================================================================================================

//Табы оплата и данные
const payItems = document.querySelectorAll('.main-payment-detailsy__item');
if (payItems) {
	const payImage = document.querySelectorAll('.main-payment-detailsy__image');
	if (payItems) {
		payItems.forEach(item => {
			item.addEventListener("click", (function (e) {
				payImage.forEach(image => {
					let attr = item.getAttribute("data-id");
					if (image.getAttribute("data-id") == attr) {
						payItems.forEach(el => { el.classList.remove('_active'); });
						payImage.forEach(el => { el.classList.remove('_active'); });
						item.classList.add('_active')
						image.classList.add("_active");
					}
				});

			}));
		});

	};
}

//========================================================================================================================================================

//Табы тарифы
const ratesItems = document.querySelectorAll('.select__option');
function rates() {
	if (ratesItems) {
		const ratesBody = document.querySelectorAll('.tabs__body');
		if (ratesItems) {
			ratesItems.forEach(item => {
				item.addEventListener("click", (function (e) {
					ratesBody.forEach(body => {
						let attr = item.getAttribute("data-id");
						if (body.getAttribute("data-id") == attr) {
							ratesItems.forEach(el => { el.classList.remove('_active'); });
							ratesBody.forEach(el => { el.classList.remove('_active'); });
							item.classList.add('_active')
							body.classList.add("_active");
						}
					});

				}));
			});

		};
	}
}

rates();

window.addEventListener("resize", function (e) {
	rates();
});

//========================================================================================================================================================

const getOfferButton = document.querySelectorAll('.get-offer');

const getOfferButtonConnection = document.querySelectorAll('.get-offer-connection');
const getOfferBlockConnection = document.querySelector('.get-offer-block-connection');

const getOfferPasswordBlock = document.querySelector('.get-offer-block-password');
const getOfferPasswordButton = document.querySelector('.form-main-application__recover-password');
const getOfferCancelButton = document.querySelector('.form-main-application__cancel');

const getOfferLoginButton = document.querySelector('.get-offer-login');
const getOfferLoginBlock = document.querySelector('.get-offer-block-login');

const getOfferClose = document.querySelectorAll('.get-offer-close');
const getOfferShadow = document.querySelector('.get-offer-shadow');
const getOfferBlock = document.querySelector('.get-offer-block');
if (getOfferButton) {
	getOfferButton.forEach(button => {
		button.addEventListener("click", function (e) {
			getOfferShadow.classList.add("_active-offer")
			getOfferBlock.classList.add("_active-offer")
			if (getOfferLoginBlock) {
				getOfferLoginBlock.classList.remove("_active-offer")
			}
			bodyLock();
		});
		getOfferClose.forEach(close => {
			close.addEventListener("click", function (e) {
				getOfferBlock.classList.remove("_active-offer")
				getOfferShadow.classList.remove("_active-offer")
				getOfferBlock.classList.remove("_active")
				bodyUnlock();
			});
		});
		getOfferShadow.addEventListener("click", function (e) {
			getOfferBlock.classList.remove("_active-offer")
			getOfferShadow.classList.remove("_active-offer")
			getOfferBlock.classList.remove("_active")
			bodyUnlock();
		});
	});
}

if (getOfferButtonConnection) {
	getOfferButtonConnection.forEach(button => {
		button.addEventListener("click", function (e) {
			getOfferShadow.classList.add("_active-offer")
			getOfferBlockConnection.classList.add("_active-offer")
			if (getOfferLoginBlock) {
				getOfferLoginBlock.classList.remove("_active-offer")
			}
			bodyLock();
		});
		getOfferClose.forEach(close => {
			close.addEventListener("click", function (e) {
				getOfferBlockConnection.classList.remove("_active-offer")
				getOfferShadow.classList.remove("_active-offer")
				getOfferBlockConnection.classList.remove("_active")
				bodyUnlock();
			});
		});
		getOfferShadow.addEventListener("click", function (e) {
			getOfferBlockConnection.classList.remove("_active-offer")
			getOfferShadow.classList.remove("_active-offer")
			getOfferBlockConnection.classList.remove("_active")
			bodyUnlock();
		});
	});
}

if (getOfferLoginButton) {
	getOfferLoginButton.addEventListener("click", function (e) {
		getOfferLoginBlock.classList.add("_active-offer")
		getOfferShadow.classList.add("_active-offer")
		bodyLock();
	});
	getOfferClose.forEach(close => {
		close.addEventListener("click", function (e) {
			getOfferLoginBlock.classList.remove("_active-offer")
			getOfferShadow.classList.remove("_active-offer")
			bodyUnlock();
		});
	});
	getOfferShadow.addEventListener("click", function (e) {
		getOfferLoginBlock.classList.remove("_active-offer")
		getOfferShadow.classList.remove("_active-offer")
		bodyUnlock();
	});
}

if (getOfferPasswordButton) {
	getOfferPasswordButton.addEventListener("click", function (e) {
		getOfferPasswordBlock.classList.add("_active-offer")
		getOfferShadow.classList.add("_active-offer")
		bodyLock();
	});
	getOfferClose.forEach(close => {
		close.addEventListener("click", function (e) {
			getOfferPasswordBlock.classList.remove("_active-offer")
			getOfferShadow.classList.remove("_active-offer")
			bodyUnlock();
		});
	});
	getOfferShadow.addEventListener("click", function (e) {
		getOfferPasswordBlock.classList.remove("_active-offer")
		getOfferShadow.classList.remove("_active-offer")
		bodyUnlock();
	});
	getOfferCancelButton.addEventListener("click", function (e) {
		getOfferPasswordBlock.classList.remove("_active-offer")
	});
}

//========================================================================================================================================================

const inputs = document.querySelectorAll(".tabs-transmit-readings__inputs-block input");

if (inputs) {
	inputs.forEach((input, index) => {
		input.addEventListener("input", ({ target }) => {
			target.value = target.value.replaceAll(/\D+/g, '').slice(0, 1);

			if (target.value.length === 1 && inputs[index + 1] !== undefined) {
				inputs[index + 1].classList.add("_active");
				inputs[index + 1].focus();
				inputs[index + 1].select();
			} else {
				inputs[index + 1].classList.remove("_active");
			}
		});
	})
}

//========================================================================================================================================================

const calendar = document.querySelector(".calendar__main");
if (calendar) {
	const input = document.querySelector("#date");
	const calHeader = document.querySelector(".calendar__header");
	const calHeaderTitle = document.querySelector(".calendar__header span");
	const calDays = document.querySelector(".calendar__days");
	const days = [
		"Пн",
		"Вт",
		"Ср",
		"Чт",
		"Пт",
		"Сб",
		"Вс"
	];
	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];

	let oneDay = 60 * 60 * 24 * 1000;
	let todayTimestamp =
		Date.now() -
		(Date.now() % oneDay) +
		new Date().getTimezoneOffset() * 1000 * 60;

	let selectedDay = todayTimestamp;
	// console.log(selectedDay); // Str in millisec

	// Get num of days in month
	// month param 0-11
	const getNumberOfDays = (year, month) => {
		return 40 - new Date(year, month, 40).getDate();
	};
	// getNumberOfDays(2023, 1);

	// Calc day details
	const getDayDetails = (args) => {
		let date = args.index - args.firstDay;
		let day = args.index % 7;
		// console.log(day)
		let prevMonth = args.month - 1;
		let prevYear = args.year;
		if (prevMonth < 0) {
			prevMonth = 11;
			prevYear--;
		}
		let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

		let _date =
			(date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
		// console.log(_date)
		let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
		let timestamp = new Date(args.year, args.month, _date).getTime();
		// console.log(timestamp)
		return {
			date: _date,
			day,
			month,
			timestamp,
			dayString: days[day]
		};
	};

	// [{}] each {} with details for each day of month
	const getMonthDetails = (year, month) => {
		let firstDay = new Date(year, month).getDay();
		let numberOfDays = getNumberOfDays(year, month);
		let monthArray = [];
		let rows = 5;
		let currentDay = null;
		let index = 0;
		let cols = 7;

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				currentDay = getDayDetails({
					index,
					numberOfDays,
					firstDay,
					year,
					month
				});
				monthArray.push(currentDay);
				index++;
			}
		}
		return monthArray;
	};
	// getMonthDetails(2023, 3)

	// Variables that get updated with "state" changes
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();
	let monthDetails = getMonthDetails(year, month);

	const isCurrentDay = (day, cell) => {
		if (day.timestamp === todayTimestamp) {
			cell.classList.add("active");
			cell.classList.add("isCurrent");

		}
	};

	// Checks if day is one selected
	const isSelectedDay = (day, cell) => {
		if (day.timestamp === selectedDay) {
			cell.classList.add("active");
			cell.classList.add("isSelected");
		}
	};

	// Get month str
	const getMonthStr = (month) =>
		months[Math.max(Math.min(11, month), 0)] || "Month";
	// console.log(getMonthStr(month))

	// Set year using arrows
	const setHeaderNav = (offset) => {
		month = month + offset;
		if (month === -1) {
			month = 11;
			year--;
		} else if (month === 12) {
			month = 0;
			year++;
		}
		monthDetails = getMonthDetails(year, month);
		// console.log(getMonthDetails(year, month))
		return {
			year,
			month,
			monthDetails
		};
	};

	// Set dynamic calendar header
	const setHeader = (year, month) => {
		calHeaderTitle.innerHTML = getMonthStr(month) + " " + year;
	};

	// Set calendar header
	setHeader(year, month);

	// 1677139200000 => "2023-02-23"
	const getDateStringFromTimestamp = (timestamp) => {
		let dateObject = new Date(timestamp);
		let month = dateObject.getMonth();
		let date = dateObject.getDate();
		// return (
		//   dateObject.getFullYear() +
		//   "-" +
		//   (month < 10 ? "0" + month : month) +
		//   "-" +
		//   (date < 10 ? "0" + date : date)
		// );
		return `${getMonthStr(month)} ${date}, ${dateObject.getFullYear()}`;
	};

	const setDateToInput = (timestamp) => {
		let dateString = getDateStringFromTimestamp(timestamp);
		input.value = dateString;
	};
	setDateToInput(todayTimestamp);

	// Add days row to calendar
	for (let i = 0; i < days.length; i++) {
		let div = document.createElement("div"),
			span = document.createElement("span");

		div.classList.add("cell_wrapper");
		// div.classList.add("cal_days");
		span.classList.add("cell_item");

		span.innerText = days[i].slice(0, 2);

		div.appendChild(span);
		calDays.appendChild(div);
	}

	// Add dates to calendar
	const setCalBody = (monthDetails) => {
		// Add dates to calendar
		for (let i = 0; i < monthDetails.length; i++) {
			let div = document.createElement("div"),
				span = document.createElement("span");

			div.classList.add("cell_wrapper");
			div.classList.add("cal_date");
			monthDetails[i].month === 0 && div.classList.add("current");
			monthDetails[i].month === 0 && isCurrentDay(monthDetails[i], div);
			span.classList.add("cell_item");

			span.innerText = monthDetails[i].date;

			div.appendChild(span);
			calendar.appendChild(div);
		}
	};

	setCalBody(monthDetails);

	const updateCalendar = (btn) => {
		let newCal, offset;
		if (btn.classList.contains("calendar__btn-prev")) {
			// let { year, month, monthDetails } = setHeaderNav(-1);
			offset = -1;
		} else if (btn.classList.contains("calendar__btn-next")) {
			// let { year, month, monthDetails } = setHeaderNav(1);
			offset = 1;
		}
		newCal = setHeaderNav(offset);
		// console.log(monthDetails)
		setHeader(newCal.year, newCal.month);
		calendar.innerHTML = "";
		setCalBody(newCal.monthDetails);
	};

	// Only one calendar date is selected
	const selectOnClick = () => {
		document.querySelectorAll(".cell_wrapper").forEach((cell) => {
			cell.classList.contains("isSelected") && cell.classList.remove("active");

			if (cell.classList.contains("isCurrent") &&
				!cell.classList.contains("active")) {
				cell.querySelector("span").classList.add("inactive_indicator");
			}
		});
	};


	const updateInput = () => {
		let currentDay = document.querySelector(".isCurrent");

		// Update input based on clicked cell
		document.querySelectorAll(".cell_wrapper").forEach((cell) => {
			if (cell.classList.contains("current")) {
				cell.addEventListener("click", (e) => {
					let cell_date = e.target.textContent;

					currentDay !== null && currentDay.classList.remove("active");

					for (let i = 0; i < monthDetails.length; i++) {
						if (monthDetails[i].month === 0) {
							if (monthDetails[i].date.toString() === cell_date) {
								selectedDay = monthDetails[i].timestamp;
								setDateToInput(selectedDay);
								selectOnClick();

								isSelectedDay(monthDetails[i], cell);

								cell.querySelector('span').classList.contains('inactive_indicator')
									&& cell.querySelector('span').classList.remove('inactive_indicator');
							}
						}
					}
				});
			}
		});
	};

	updateInput();

	// Set header nav actions
	document.querySelectorAll(".calendar-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			updateCalendar(btn);
			updateInput();
		});
	});

	input.addEventListener('click', () => {
		document.querySelector('.calendar__content').classList.toggle('hidden');
		document.querySelector('.calendar__input').classList.toggle('showCal');
		document.querySelector('#date').classList.toggle('onFocus');
	});
	window.addEventListener('click', e => {
		const target = e.target
		if (!target.closest('#date') && !target.closest('.calendar__input') && !target.closest('.calendar__content')) {
			document.querySelector('.calendar__content').classList.add('hidden');
			document.querySelector('.calendar__input').classList.remove('showCal');
			document.querySelector('#date').classList.add('onFocus');
		}
	})

}

//========================================================================================================================================================

//куки
const cookiesBtn = document.querySelector('.cookies__button');

if (cookiesBtn) {
	const cookies = document.querySelector('.page__cookies');
	cookiesBtn.addEventListener("click", function (e) {
		cookies.classList.add("_active")
	});
}
