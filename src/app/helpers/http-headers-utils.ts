import {HttpResponse} from '@angular/common/http';

export default class HttpHeadersUtils {

    private static readonly CONTENT_DISPOSITION_HEADER = 'Content-Disposition';

    public static getFileNameFromContentDispositionHeader(httpResponse: HttpResponse<any>): string {
        const contentDispositionHeader = httpResponse.headers.get(this.CONTENT_DISPOSITION_HEADER);
        const result = contentDispositionHeader ? contentDispositionHeader.split(';')[1]?.trim().split('=')[1] : '';
        return result.replace(/"/g, '');
    }
}
