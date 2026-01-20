/**
 * Format Date to various formats
 * @param {Date | string} inputDate
 * @param {string} format
 * @returns {string}
 */
export function formatDate(inputDate, format = 'full') {
  if (!inputDate) return '';

  let date;

  // ✅ Handle Date object (Astro content collections)
  if (inputDate instanceof Date) {
    date = inputDate;
  } 
  // ✅ Handle string fallback (YYYY, YYYY-MM, YYYY-MM-DD)
  else {
    const parts = inputDate.split('-');
    const year = parseInt(parts[0], 10);
    const month = parts[1] ? parseInt(parts[1], 10) - 1 : 0;
    const day = parts[2] ? parseInt(parts[2], 10) : 1;
    date = new Date(year, month, day);
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const shortMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  switch (format) {
    case 'full':
      return `${months[month]} ${day}, ${year}`;

    case 'month-year':
      return `${months[month]} ${year}`;

    case 'short-month-year':
      return `${shortMonths[month]} ${year}`;

    case 'year':
      return `${year}`;

    case 'mm-yyyy':
      return `${String(month + 1).padStart(2, '0')}-${year}`;

    case 'yyyy-mm':
      return `${year}-${String(month + 1).padStart(2, '0')}`;

    case 'dd-mm-yyyy':
      return `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`;

    case 'mm/dd/yyyy':
      return `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;

    default:
      return date.toISOString();
  }
}


/**
 * Format date range (birth-death)
 * @param {Date | string} birthDate 
 * @param {Date | string} deathDate 
 * @param {string} format 
 * @returns {string}
 */
export function formatDateRange(birthDate, deathDate, format = 'year') {
  const birth = formatDate(birthDate, format);
  const death = deathDate ? formatDate(deathDate, format) : 'present';
  return `${birth} - ${death}`;
}