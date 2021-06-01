export const mapToSeconds = (seconds) => seconds % 60;
export const mapToMinutes = (seconds) => Math.floor(seconds / 60);
export const mapToHours = (seconds) => Math.floor(mapToMinutes(seconds) / 60);

export const formatTimeUnit = (unit) => unit >= 10 ? unit : '0' + unit;

export const formatTimeFromSeconds = (timeSeconds) => {
    const timestamp = timeSeconds;

    const hours = formatTimeUnit(mapToHours(timestamp));
    const minutes = formatTimeUnit(mapToMinutes(timestamp));
    const seconds = formatTimeUnit(mapToSeconds(timestamp));

    return `${hours}:${minutes}:${seconds}`;
}