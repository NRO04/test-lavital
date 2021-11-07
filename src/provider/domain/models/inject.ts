export default interface Injectable<DEPENDENCY> {

    [SERVICE_NAME: string]: DEPENDENCY;

}